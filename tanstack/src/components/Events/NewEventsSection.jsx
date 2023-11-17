import {useQuery} from "@tanstack/react-query";

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';

import {fetchEvents} from "../../util/http.js";

export default function NewEventsSection() {

  //useQuery는 promise를 요구한다.
  const {data,
    isPending,
    isError,
    error,
    refetch} = useQuery({
    // 전송 요청으로 생성된 작업을 동일하게 전송할 때 재사용할 수 있게 데이터 캐시 처리를 위한.
    // 키 값은 문자 이외에 종류로 지정가능.
    queryKey: ['events', {max:3}],
    queryFn: ({signal, queryKey}) =>
        fetchEvents({signal, ...queryKey[1] }),//실제 요청을 전송할 때 실행할 코드를 정의 가능.(promise)

    staleTime: 5000, //캐시 데이터가 있다면 업데이트된 데이터를 가져오기 위한 요청을 전송하기 전에 기다릴 시간.(기본 0초)
    //gcTime: 30000//가비지 컬렉터 시간, 얼마나 오랫동안 캐시를 보관할지 제어(기본 5분)
  })

  let content;

  if (isPending) { // 현재 진행되고 있는건지.
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch events.'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
