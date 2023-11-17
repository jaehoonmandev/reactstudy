import {Link, Outlet, useNavigate, useParams} from 'react-router-dom';

import Header from '../Header.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchEvent, deleteEvent, queryClient} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import {useState} from "react";
import Modal from "../UI/Modal.jsx";


export default function EventDetails() {
    const [isDeleting, SetisDeleting] = useState(false);

    //라우트 파라미터를 이용해야한다.
    const params = useParams()
    const navigate = useNavigate();

    const {data, isPending, isError, error} = useQuery({
        queryKey: ['events', params.id], //아이디마다 다른 데이터를 가져와야하기에 캐시 처리에 동일한 이름 사용하면 안된다.
        queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
    })

    const {mutate, isPending: isPendingDeletion, isError: isErrorDeletion} = useMutation({
        mutationFn: deleteEvent,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['events'],
                refetchType: 'none' // 해당 아이디를 가진 쿼리는 다시 로드되지 않도록한다.
            }),
                navigate('/events')
        }
    })

    function handleStartDelete() {
        SetisDeleting(true);
    }

    function handleStartNotDelete() {
        SetisDeleting(false);
    }

    function handleDelete() {
        mutate({
            id: params.id
        });
    }

    let content;

    if (isPending) {
        content = <LoadingIndicator/>
    }

    if (isError) {
        content =
            <ErrorBlock title={'Failed to load event'} message={error.info?.message || 'Failed to fetch event data'}/>
    }

    if (data) {

        const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        content = (
            <>
                <header>
                    <h1>EVENT TITLE</h1>
                    <nav>
                        <button onClick={handleStartDelete}>Delete</button>
                        <Link to="edit">Edit</Link>
                    </nav>
                </header>
                <div id="event-details-content">
                    <img src={`http://localhost:3000/${data.image}`} alt={data.title}/>
                    <div id="event-details-info">
                        <div>
                            <p id="event-details-location">{data.location}</p>
                            <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {data.time}</time>
                        </div>
                        <p id="event-details-description">{data.description}</p>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            {isDeleting &&
                <Modal onClose={handleStartNotDelete}>
                    <h2>Are tou sure?</h2>
                    <div className={'form-actions'}>
                        {isPendingDeletion && <p>Deleting...</p>}
                        {isPendingDeletion && (
                            <>
                                <button onClick={handleStartNotDelete} className={'button-text'}>Cancle</button>
                                <button onClick={handleDelete} className={'button'}>Delete</button>
                            </>
                        )}
                    </div>
                </Modal>
            }
            <Outlet/>
            <Header>
                <Link to="/events" className="nav-item">
                    View all Events
                </Link>
            </Header>
            <article id="event-details">
                {content}
            </article>
        </>
    );
}
