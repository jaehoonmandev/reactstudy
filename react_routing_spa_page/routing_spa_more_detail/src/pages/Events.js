import {useLoaderData} from "react-router-dom";

import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();//async - await 를 사용했기에 promise
    const data = events.events; // fetch에서 return하는 response는 다양한 객체를 가진다.

    // if(events.isError){
    //     return <p>{events.message}</p>
    // }
  return (
    <>
      <EventsList events={data} />
    </>
  );
}  

export default EventsPage;


export async function loader() { //브라우저에서 실행된다.
    const response = await fetch('http://localhost:8080/events   1');

    if (!response.ok) {
       //return { isError : true, message:'Could not fetch events'};
        throw new Response(JSON.stringify(
            {message :'Could not fetch events' }),
            {status: 500})
    } else {
        return response;
    }
}