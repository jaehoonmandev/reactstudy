import PageContent from "../components/PageContent";

import {useRouteError} from 'react-router-dom'
function ErrorPage() {
    const error = useRouteError(); // throw new Response 하면

    let title = 'An error occurred!'
    let message = 'something went wrong'

    if(error.status === 500){
        message = JSON.parse(error.data).message;
    }
    if(error.status === 404){
        title = 'Not found!'
        message='Could not find resource or page'
    }

    return <PageContent title={title}>
        <p> {message} </p>
    </PageContent>
}

export default ErrorPage;