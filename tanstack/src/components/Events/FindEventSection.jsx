import {useRef, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {fetchEvents} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";

export default function FindEventSection() {
    const searchElement = useRef();
    const [searchTerm, setSearchTerm] = useState(); // 리액트는 state가 변경될 때마다 실행된다.

    const {data, isPending, isLoading, isError, error} = useQuery({
        queryKey: ['events', {search: searchTerm}], //동일한 요청을 보내지만 기능을 다르기에 키를 다르게 해야한다.
        // 동일한 요청을 보내지만 경우에따가 분기 하기위해 인자를 준다
        // 리액트 제공 기본 데이터를 사용하지 않는다면 {,} 로 커스텀이 가능하다.
        queryFn: ({signal}) =>
            fetchEvents({signal, searchTerm}), // 객체에 전달하는 값은 {,}로 랩핑.
        enabled: searchTerm !==undefined// 유저가 검색을 하지 않았다면.
    })

    function handleSubmit(event) {
        event.preventDefault();
        setSearchTerm(searchElement.current.value) // 사용자가 값을 새로 검색 할 때마다 값을 갱신하여 쿼리가 돌게.
    }


    let content = <p>Please enter a search term and to find events</p>

    if (isLoading) {
        content =  <LoadingIndicator />
    }
    if (isError) {
        content = <ErrorBlock title={"An error occurred"}
                              message={error.info?.message || 'Failed to fetch events.'}/>
    }

    if(data){
        content =  <ul className={'events-list'}>
            {data.map(event=> (
                <li key={event.id}>
                    <EventItem event={event}/>
                </li>
                ))}
        </ul>
    }
    return (
        <section className="content-section" id="all-events-section">
            <header>
                <h2>Find your next event!</h2>
                <form onSubmit={handleSubmit} id="search-form">
                    <input
                        type="search"
                        placeholder="Search events"
                        ref={searchElement}
                    />
                    <button>Search</button>
                </form>
            </header>
            {content}
        </section>
    );
}
