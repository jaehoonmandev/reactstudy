import MeetupList from "@/components/meetups/MeetupList";
import Layout from "@/components/layout/Layout";
import {useEffect, useState} from "react";
import {MongoClient} from "mongodb";

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


//빌드 프로세스 중에 실행되지 않고, 요청이 들어올 때만 실행되어 정적인 페이지를 생성한다.
// export async function getServerSideProps(context){
//
//     //request, response 객체에 접근가능.
//     // 세션, 쿠키 등에 접근 가능.
//     const req = context.req;
//     const res = context.res;
//
//     return{
//         props: {
//             meetups: DUMMY_MEETUPS,
//         }
//     }
// }

// NextJS는 데이터를 읽어 들일 때 까지 기다린다.(promise가 해결될 때)
// 정적인 pre-rendering 페이지를 생성하며, pages 폴더 컴포넌트에서만 작동한다.
export async function getStaticProps() {
    // 컴포넌트 함수가 실행되기 전에 데이터를 읽어 들일 수 있어서 함께 렌더링 가능.
    // 서버에서만 돌아가는 코드를 실행할 수 있다(파일 시스템 접근, DB연결...)
    // 방문자의 컴퓨터에서 실행될 수 없다.

    const client = await MongoClient.connect('mongodb+srv://wido1593:26TMEf9wYsQNk3j2@cluster0.p6nxjrj.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();
    return{ // return 필수
        props: {//페이지 컴포넌트가 받는 props
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    id: meetup._id.toString(), //자동으로 생성한 id 변환
            }))
        },
        //점진적 정적 생성으로 최신 데이터를 가져올 수 있다.
        //3600초마다 페이지를 다시 생성한다
        //이로 인해 정적 페이지 생성을 위해서 빌드를 계속 할 필요가 없어진다.
        revalidate: 3600,
    }

}

export default HomePage