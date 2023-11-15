import {useLoaderData} from "react-router-dom";

import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();//async - await 를 사용했기에 promise
  return (
    <>
      <EventsList events={events} />
    </>
  );
}  

export default EventsPage;
