import {Link, useNavigate, useParams} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchEvent, updateEvent} from "../../util/http.js";
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
        mutationFn:updateEvent,
    })

    function handleSubmit(formData) {
        mutate({
            id: param.id,
            event : formData
        })
        navigate('../');
    }

    function handleClose() {
        navigate('../');
    }

    let content;

    if (isPending) {
        content = <div className={'center'}>
            <LoadingIndicator/>
        </div>
    }

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
