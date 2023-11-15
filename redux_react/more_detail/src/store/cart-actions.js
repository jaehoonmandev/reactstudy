import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-9004e-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok){
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();

            return data;
        }

        try {
            const cartData = await fetchData();

            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }));

            dispatch(uiActions.showNotification({
                status: 'success', title: 'Success!', message: 'Fetching cart data Successfully!',
            }))
        }catch (error){
            dispatch(uiActions.showNotification({
                status: 'error', title: 'Error!', message: 'Fetching cart data failed!',
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        //dispatch 전에 다른 작업이 가능하다.
        dispatch(uiActions.showNotification({
            status: 'pending..',
            title: 'Sending...',
            message: 'Sending cart data!',
        }))

        const sendRequest = async  () => {
            const response = await fetch(
                'https://react-http-9004e-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity
                    })
                });
            if (!response.ok) {
                throw new Error('send cart error');
            }
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success', title: 'Success!', message: 'Sending cart data Successfully!',
            }))
        }catch (error){
            dispatch(uiActions.showNotification({
                status: 'error', title: 'Error!', message: 'Sending cart data failed!',
            }))
        }

    }

}