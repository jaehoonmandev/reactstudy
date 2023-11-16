import EventForm from "../components/EventForm";
import {json, redirect} from "react-router-dom";

function NewEventPage() {
    return <EventForm/>
}

export default NewEventPage

export async function action({request, params}) {
    const data = await request.formData(); // <Form> 에 있는 값들을 읽어온다.

    const eventData = {
      title: data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
        description: data.get('description'),
    }
    const response = await fetch('http://localhost:8080/events',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' //json 형식으로 데이터 전송.
        },
        body : JSON.stringify(eventData)
    })

    if(response.status === 422){ // 서버측에서 보낸 에러 메시지 핸들링
        return response;
    }

    if(!response.ok){
        throw json({message: 'Could not save Event'}, {status:500});
    }
    return redirect('/events') // 리다이렉트
}