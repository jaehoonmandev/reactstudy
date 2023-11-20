import {Fragment} from "react";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Layout from "@/components/layout/Layout";
import {useRouter} from "next/router";


function NewMeetupPage(){
    const router = useRouter()

    async function addMeetUpHandler(enteredData){
       const response = await fetch('/api/new-meetup',{// 파일 이름으로도 접근이 가능하다.
           method: 'POST',
           body:JSON.stringify(enteredData),
           headers: {
               'Content-Type' : 'application/json'
           }
       })

        const data = await response.json();

        router.push('/');
    }
    return (

          <NewMeetupForm onAddMeetup={addMeetUpHandler} />

    );
}

export default NewMeetupPage;