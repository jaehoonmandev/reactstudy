import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const ProductItem = (props) => {
  //부모 컴포넌트에서 넘겨준 항목들 디스트럭처링
  const { title, price, description,id } = props;

  const dispatch = useDispatch();
  const addCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      //페이로드 설정.
      id,
      title,
      price,
      description
    }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
