import {useRouter} from "next/router";

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId // 동적 파일이름으로 지정한 아이디를 인식한다.

    return (
        <h1> THe News Detail Page</h1>
    )
}

export default DetailPage