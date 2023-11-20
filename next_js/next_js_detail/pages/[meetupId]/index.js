
import MeetupDetail from "@/components/meetups/MeetupDetail";
import {useRouter} from "next/router";
import {MongoClient, ObjectId} from "mongodb";
import {Fragment} from "react";
import Head from "next/head";

function MeetupDetails(props) {
    useRouter()
    return (
        <Fragment>
            <Head>
                <title> {props.meetupData.title} </title>
                <meta name={"description"} content={props.meetupData.description}/>
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    )
}

export async function getStaticPaths(){

    const client = await MongoClient.connect('mongodb+srv://wido1593:26TMEf9wYsQNk3j2@cluster0.p6nxjrj.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({},{_id: 1}).toArray(); //Id 값만 가져온다.

    client.close()

    return{
        fallback: 'blocking', //false: 지정한 것만, block/true: 동적으로 생성
        //true: 빈페이지 즉시 반환, 동적 생성컨텐츠 풀다운, block: 반환되기 전까지 페이지 표시 안함.
        // 인기 있는 몇개의 페이지만 사전 렌더링 하고 싶다면 false도 고려
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString(),
            }
        }))
    }
}

export async function getStaticProps(context){
    //리액트 훅을 사용할 수 없으니 context를 통해 매개변수를 가져올 수 있다.
    const meetupId = new ObjectId(context.params.meetupId);

    const client = await MongoClient.connect('mongodb+srv://wido1593:26TMEf9wYsQNk3j2@cluster0.p6nxjrj.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne(
        {_id: meetupId,}
    ); //Id 값으로 한 데이터만 가져온다.

    client.close()

    return{
        props:{
            meetupData:{
                id:selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address:selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            } ,

        }
    }
}
export default MeetupDetails;