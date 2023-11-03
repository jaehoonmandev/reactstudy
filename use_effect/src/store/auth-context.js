import React, {useEffect, useState} from "react";

//컨텍스트 객체 생성
const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

/*컨텍스트를 사용자화 컴포넌트로 제공할 수 있다.*/
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 의존성이 재평가 후 실행되는 리액트 Effect
    useEffect(() => {
            const storedUserLoggedInInformaion = localStorage.getItem('isLoggedIn');

            if(storedUserLoggedInInformaion === '1'){
                setIsLoggedIn(true);
            }
        },
        // 의존성이 없을 때는 앱이 시작될 때만 실행된다. 즉, 한 번만 실행된다.
        []);

    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', '0');
        setIsLoggedIn(false);
    }

    const loginHandler = () =>{
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
    }
    return(
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin:loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContext;