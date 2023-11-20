// domain.com/news
import {Fragment} from "react";
import Link from "next/link";

function NewsPage() {
    return (
        <Fragment>
            <h1> THe News Page</h1>
            <ul>
                <li>
                    <Link href={'/news/detail'}>
                        NextJS Is A Great framework
                    </Link>
                </li>
                <li>Something Else</li>
            </ul>
        </Fragment>

    )
}

export default NewsPage