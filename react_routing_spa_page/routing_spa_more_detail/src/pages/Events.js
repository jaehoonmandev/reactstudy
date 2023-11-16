import {useLoaderData, json, defer, Await} from "react-router-dom";

import EventsList from '../components/EventsList';
import {Suspense} from "react";

function EventsPage() {
  //const events = useLoaderData();//async - await 를 사용했기에 promise
    const data = events.events; // fetch에서 return하는 response는 다양한 객체를 가진다.


    const {events} =useLoaderData();
    // if(events.isError){
    //     return <p>{events.message}</p>
    // }
  return (
    // <>
    //     {/*<EventsList events={data} />*/}
    // </>
      <Suspense fallback={<p style={{ textAign: 'center'}}>Loading...</p>}>
          <Await resolve={events}>
              {(loadEvents) => <EventsList events={loadEvents} />}
          </Await>
      </Suspense>
  );
}  

export default EventsPage;

async function loadEvents(){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        //return { isError : true, message:'Could not fetch events'};
        //  throw new Response(JSON.stringify(
        //      {message :'Could not fetch events' }),
        //      {status: 500})
        return json({messgae: 'Could not fetch events.'},
            {status: 500});
    } else {
        // return response;
        const resData = await response.json();
        return resData.events
    }
}

export function loader() { //브라우저에서 실행된다.
    return defer({
        events: loadEvents()
    })
}