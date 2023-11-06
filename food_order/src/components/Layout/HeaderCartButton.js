import React,{useContext, useEffect,useState} from "react";

import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx

    const numberOfCartItems = items.reduce(
        (curNumber, item) => {
            return curNumber + item.amount;
        }, 0// 처음은 초기 값이지만 실행되면서 값이 바뀐다.
    );// 데이터 배열을 값 하나로 변환해주는 내장 메소드


    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;


    useEffect(() => {
        if(cartCtx.items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer =
            setTimeout(() => { setBtnIsHighlighted(false)}, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
      <button className={btnClasses} onClick={props.onClick}>
          <span className={classes.icon}>
              <CartIcon/>
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    );
}

export default HeaderCartButton;