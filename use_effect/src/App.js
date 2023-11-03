import React, {useEffect, useState} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {

    // 의존성이 재평가 후 실행되는 리액트 Effect
    useEffect(() => {
        const storedUserLoggedInInformaion = localStorage.getItem('isLoggedIn');

        if(storedUserLoggedInInformaion === '1'){
            setIsLoggedIn(true);
        }
    },
        // 의존성이 없을 때는 앱이 시작될 때만 실행된다. 즉, 한 번만 실행된다.
        []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1'); // 로컬 스토리지 사용하여 로그인 상태를 저장.
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '0');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
