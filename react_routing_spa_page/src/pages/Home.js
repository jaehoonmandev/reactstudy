import {Link, useNavigate} from 'react-router-dom'
const HomePage = () => {

    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products') // 타이머가 만료되었을 때 와 같은 상황에 사용할 수 있다.
    }
    return(
        <>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to={'/products'}> the list of products</Link>
            </p>
            <p>
                <button onClick={navigateHandler}> Navigates </button>
            </p>
        </>
    )
}

export default HomePage