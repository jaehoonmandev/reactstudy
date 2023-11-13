import {useContext, useState,Fragment} from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)

  const [isCheckOut, setIsCheckOut] = useState(false);
  
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  
  

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const toggleOrderHandler = () => {
    setIsCheckOut(isCheckOut => !isCheckOut);
  }

  //전송을 눌렀을 시 POST로 데이터 전송 후 저장.
  const submitOrderHandler = (userData)=> {
    setIsSubmitting(true);
    fetch('https://react-http-9004e-default-rtdb.firebaseio.com/order.json',{
      method: 'POST',
      body: JSON.stringify({
        user: userData, // 유저의 주소 입력 정보
         orderedItems: cartCtx.items// 장바구니에 아이템을 넣을 때 컨텍스트에 넣었기 떄문에.
      })
    })
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart(); //컨텍스트 비우기.
  }



  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalAction =( <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>
      Close
    </button>
    {hasItems && <button className={classes.button} onClick={toggleOrderHandler}>Order</button>}
  </div> );


  const cartModalContent = (
      <Fragment>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {isCheckOut && <Checkout onConfirm={submitOrderHandler} onToggleOrder={toggleOrderHandler}/> }
        {!isCheckOut && modalAction}
      </Fragment>
  )

  const insubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = <p>Successfully sent the order!</p>
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && insubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
