import {redirect} from "react-router-dom";

export function getTokenDuration() {
    const expiratoinDate = new Date(localStorage.getItem('expiration'));
    const now = new Date();
    const duration = expiratoinDate.getTime() - now.getTime(); // 만료되었다면 음수가 나온다.

    return duration;
}
export function getAuthToken() {
    const token = localStorage.getItem('token');
    if(!token){
        return null;
    }
    const tokenDuration = getTokenDuration();

    if(tokenDuration < 0){
        return 'EXPIRED'
    }

    return token;
}

export function loader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if(!token){
        return redirect('/auth')
    }

    return null;

}