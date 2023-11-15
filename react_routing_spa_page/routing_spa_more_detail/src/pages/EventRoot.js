import EventsNavigation from "../components/EventsNavigation";
import {Outlet} from "react-router-dom";

function EventRootLayer() {
    return(
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
}

export default EventRootLayer