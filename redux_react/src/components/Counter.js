import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

import { counterActions} from "../store/index";
import INCREMENT from '../store/index'
const Counter = () => {
    //액션을 전송할 Dispath 함수
    const dispatch = useDispatch();

    //redux에 의해 관리되는 함수.
    //내부 함수는 react-redux가 실행한다.
    // 실행되면서 자동으로 구독과 해지가 설정된다.
    //const counter = useSelector(state => state.counter)
    const counter = useSelector(state => state.counter.counter) //슬라이스 분할로 지정한 식별자 때문에 다시 지정해줘야함.
    const show = useSelector(state => state.counter.showCounter)

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }
    const increseHandler = () => {
        // dispatch({
        //     type: 'increse',
        //     amount: 5
        // })
        dispatch(counterActions.increase(5)); // 넘겨지는 값은 기본적으로 payload로 지정되기에 필드 이름을 정해서 보낼 수 없다.
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }
  const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementHandler}> Increment </button>
            <button onClick={increseHandler}> Increment 5</button>
            <button onClick={decrementHandler}> Decrement </button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
