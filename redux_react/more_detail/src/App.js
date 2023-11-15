import {useDispatch, useSelector} from 'react-redux'
import {Fragment, useEffect} from "react";

import Layout from './components/Layout/Layout';

import Products from './components/Shop/Products';
import Cart from './components/Cart/Cart';
import {uiActions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true

function App() {
    const dispatch = useDispatch();
    const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart) //useSelector로 리덕스 구독 설정
    const notification = useSelector(state => state.ui.notification)

    useEffect(() => {
        const sendCartData = async () => {

            dispatch(uiActions.showNotification({
                status: 'pending..',
                title: 'Sending...',
                message: 'Sending cart data!',
            }))

            const response = await fetch(
                'https://react-http-9004e-default-rtdb.firebaseio.com/cart.json',
                {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if (!response.ok) {
                throw new Error('send cart error');
            }

            dispatch(uiActions.showNotification({
                status: 'success', title: 'Success!', message: 'Sending cart data Successfully!',
            }))
            //const responseData = await response.json();
        }

        if(isInitial){
            isInitial=false
            return
        }

        sendCartData().catch(error => {
            dispatch(uiActions.showNotification({
                status: 'error', title: 'Error!', message: 'Sending cart data failed!',
            }))
        })

    }, [cart,dispatch]);//구독한 데이터가 바뀔 때 마다
    return (<Fragment>
            {notification &&
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}/>}
            <Layout>
                {cartIsVisible && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>

    );
}

export default App;
