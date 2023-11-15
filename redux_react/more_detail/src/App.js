import {useDispatch, useSelector} from 'react-redux'
import {Fragment, useEffect} from "react";

import Layout from './components/Layout/Layout';

import Products from './components/Shop/Products';
import Cart from './components/Cart/Cart';

import Notification from "./components/UI/Notification";
import {sendCartData} from "./store/cart-slice";

let isInitial = true

function App() {
    const dispatch = useDispatch();
    const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart) //useSelector로 리덕스 구독 설정
    const notification = useSelector(state => state.ui.notification)

    useEffect(() => {

        if(isInitial){
            isInitial=false
            return;
        }
        dispatch(sendCartData(cart));

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
