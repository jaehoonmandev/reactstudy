import MeetupList from "@/components/meetups/MeetupList";
import Layout from "@/components/layout/Layout";
import {useEffect, useState} from "react";

const DUMMY_MEETUPS =[
    {
        id:'m1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
        adress: 'Some address 5, 1235 Some City',
        description : "This is a first meet up"
    },
    {
        id:'m2',
        title: 'Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
        adress: 'Some address 5, 1235 Some City',
        description : "This is Second meet up"
    },
]

function HomePage(props) {
    // const [loadMeetups, setLoadMeetups] = useState([])
    //
    // useEffect(() => {
    //     setLoadMeetups(DUMMY_MEETUPS)
    // }, []);
    return(
            <MeetupList meetups={props.meetups}></MeetupList>

    )
}

// NextJS는 데이터를 읽어 들일 때 까지 기다린다.(promise가 해결될 때)
// pages 폴더 컴포넌트에서만 작동한다.
export async function getStaticProps() {
    // 컴포넌트 함수가 실행되기 전에 데이터를 읽어 들일 수 있어서 함께 렌더링 가능.
    // 서버에서만 돌아가는 코드를 실행할 수 있다(파일 시스템 접근, DB연결...)
    // 방문자의 컴퓨터에서 실행될 수 없다.

    return{ // return 필수
        props: {//페이지 컴포넌트가 받는 props
            meetups: DUMMY_MEETUPS
        }
    }

}

export default HomePage