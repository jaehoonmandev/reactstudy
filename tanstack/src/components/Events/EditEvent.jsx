import {Link, useNavigate, useParams} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchEvent, queryClient, updateEvent} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
    const navigate = useNavigate();
    const param = useParams()

    const {data, isPending, isError, error} = useQuery({
        queryKey: ['events', param.id],
        queryFn: ({signal}) =>
            fetchEvent({signal, id: param.id})
    })

    const {mutate} = useMutation({
        mutationFn: updateEvent,
        onMutate: async (data) => {//mutate를 실행하자마자 실행되며, mutate 실행시 넘긴 값이 넘어온다.
            //쿼리에 의해 캐시된 데이터를 변경하라한다.
            const newEvent = data.event;

            await queryClient.cancelQueries({queryKey: ['events', param.id]}) //해당 아이디 쿼리 취소하여 이전 데이터 가져오지 않도록
            const previousEvent = queryClient.getQueriesData(['events', param.id]); // 이전 데이터를 가져온다
            // 응답을 기다리지 않고 직접 저장된 데이터를 수정한다.
            queryClient.setQueriesData(['events', param.id], newEvent);

            return {previousEvent};// 롤백하는 데이터를 onError에 넘길 수 있도록.
        },
        onError: (error, data, context) => {
            //에러가 발생했을 때 이전 값을 가져와 다시 롤백해야한다.
            queryClient.setQueryData(['events', param.id], context.previousEvent)
        },
        onSettled: () => { // mutation 동작이 완료될 때 마다 실행.
            //동기화 되지 않을 때 쿼리에 데이터를 내부적으로 다시 가져와 다시 동기화시킨다.
            queryClient.invalidateQueries(['events', param.id])
        },
    })

    function handleSubmit(formData) {
        mutate({
            id: param.id,
            event: formData
        })
        navigate('../');
    }

    function handleClose() {
        navigate('../');
    }

    let content;

    // if (isPending) {
    //     content = <div className={'center'}>
    //         <LoadingIndicator/>
    //     </div>
    // }

    if (isError) {
        content =
            <>
                <ErrorBlock title={'error'} messgae={error.info?.messgae || 'error'}/>
                <div className="form-actions">
                    <Link to={'../'} className={'button'}>
                        okay
                    </Link>
                </div>
            </>
    }

    if (data) {
        content =
            <EventForm inputData={data} onSubmit={handleSubmit}>
                <Link to="../" className="button-text">
                    Cancel
                </Link>
                <button type="submit" className="button">
                    Update
                </button>
            </EventForm>
    }

    return (
        <Modal onClose={handleClose}>
            {content}
        </Modal>
    );
}


export function loader({params}) {
    return queryClient.fetchQuery({ // useQuery 훅을 사용하지 않고 직접 불러온다.
        queryKey: ['events', params.id],
        queryFn: ({signal}) =>
            fetchEvent({signal, id: params.id})
    })
}