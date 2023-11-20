
import MeetupDetail from "@/components/meetups/MeetupDetail";
import {useRouter} from "next/router";

function MeetupDetails(props) {
    useRouter()
    return (
        <MeetupDetail
            image={'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png'}
            title={'A First Meetup'}
            address={'Some Street 5, Some City'}
            description={'The meetup description'}
        />

    )
}

export async function getStaticPaths(){
    return{
        fallback: false, //false: 지정한 것만, true: 동적으로 생성.
        // 인기 있는 몇개의 페이지만 사전 렌더링 하고 싶다면 false도 고려
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ]
    }
}

export async function getStaticProps(context){
    //리액트 훅을 사용할 수 없으니 context를 통해 매개변수를 가져올 수 있다.
    const meetupId = context.params.meetId;


    return{
        props:{
            meetupData:{
                image:'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
                title:'A First Meetup',
                address:'Some Street 5, Some City',
                description:'The meetup description',
            }
        }
    }
}
export default MeetupDetails;