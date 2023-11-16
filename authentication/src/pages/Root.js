import {Outlet, useLoaderData, useNavigation, useSubmit} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import {useEffect} from "react";
import {getTokenDuration} from "../util/auth";

function RootLayout() {
  // const navigation = useNavigation();
    const token = useLoaderData();
    const submit = useSubmit()
    //최상위가 렌더링 되자마자 실행 될 수 있도록.
    useEffect(() => {
        if(!token){
            return;
        }

        //만료 되었다면
        if (token === 'EXPIRED'){
            submit(null, {action: '/logout', method:'post'})
        }

        const tokenDuration = getTokenDuration();

        setTimeout(() => {
            submit(null, {action: '/logout', method:'post'})
        }, tokenDuration) // 1시간

    }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
