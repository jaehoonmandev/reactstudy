import EventForm from "../components/EventForm";
import {useLoaderData,useRouteLoaderData} from "react-router-dom";

function EditEventPage() {
    // const data = useLoaderData();
    //중첩된 loader 라우팅은 라우팅 id 값을 지장하고 useRouteLoaderData 에 해당 id를 넣어준다.
    const data = useRouteLoaderData('event-detail');

    return <EventForm event={data.event}/>
}

export default EditEventPage
