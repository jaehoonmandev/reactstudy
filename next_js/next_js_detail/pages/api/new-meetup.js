// /api/new-meetup

import {MongoClient} from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {

        const data = req.body;

        // const { title, image, address, description } = data;
        //MongoDB 연결 pool 생성.
        const client = await MongoClient.connect('mongodb+srv://wido1593:26TMEf9wYsQNk3j2@cluster0.p6nxjrj.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        //데이터 저장.
        const result = await meetupsCollection.insertOne(data); //mongoDB는 JS와 같은 객체를 사용하기에 단순히 data만 넣어도된다.

        client.close();

        res.status(201).json( {message: 'Meetup inserted!'} )
    }
}

export default handler