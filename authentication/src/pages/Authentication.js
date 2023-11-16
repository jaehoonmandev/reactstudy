import AuthForm from '../components/AuthForm';
import {json, redirect} from "react-router-dom";


function AuthenticationPage() {
    return <AuthForm/>;
}

export default AuthenticationPage;

export async function action({request, params}) {

    const mode = new URL(request.url)
            .searchParams.get('mode')// 파라미터 값 확인
        || 'login'; // 설정되지 않았다면 기본값

    if (mode !== 'login' && mode !== 'signup') {
        throw json({message: 'Unsupported mode.'}, {status: 422})
    }

    const data = await request.formData();

    const authData = {
        email: data.get('email'),
        password: data.get('password'),
    }

    const response = await fetch('http://localhost:8080/' + mode,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authData)
        })

    if(response.status === 422 || response.status === 401){
        return response;
    }
    if(!response.ok){
        throw json({message: 'Could not authenticate user'}, {status: 500});
    }

    //토큰 값 가져오기
    const resData = await response.json();
    const token = resData.token;

    localStorage.setItem('token', token); // 로컬스토리지 저장.

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1)//미래의 시간을 지정하여 만료 시간을 정한다.
    localStorage.setItem('expiratoin', expiration.toISOString())

    return redirect('')
}