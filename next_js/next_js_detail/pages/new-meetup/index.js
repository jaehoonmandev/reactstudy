import {Fragment} from "react";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Layout from "@/components/layout/Layout";


function NewMeetupPage(){

    function addMeetUpHandler(enteredData){
        console.log(enteredData)

    }
    return (

          <NewMeetupForm onAddMeetup={addMeetUpHandler} />

    );
}

export default NewMeetupPage;