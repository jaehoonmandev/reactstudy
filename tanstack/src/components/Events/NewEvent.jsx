import { Link, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation} from "@tanstack/react-query";
import {createNewEvent, queryClient} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();

  const {mutate, isPending,isError, error} = useMutation({
    mutationFn: createNewEvent,
    onSuccess:() => {// 성공했을 때
      queryClient.invalidateQueries({//쿼리 클라이언트 무효화하여 데이터가 오래 됐으니 다시 불러오라고 알려준다.
        queryKey: ['events'], // 이벤트를 불러오는 아이디를 지정한다.
        //exact: true// 쿼리키와 정확히 일치하는 것만 무효화시킨다.
      })
      navigate('/events') // 페이지 이동

    },
  })
  function handleSubmit(formData) {
    mutate(formData)
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending&& <p> Submitting... </p>}
        {!isPending &&
            <>
              <Link to="../" className="button-text">
                Cancel
              </Link>
              <button type="submit" className="button">
                Create
              </button>
            </>
        }
      </EventForm>
      {isError && <ErrorBlock title={'Failed to crate event'} message={error.info?.message || 'Sending failed'}/>}
    </Modal>
  );
}
