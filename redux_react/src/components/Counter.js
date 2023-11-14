import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import INCREMENT from '../store/index'
const Counter = () => {
    //액션을 전송할 Dispath 함수
    const dispatch = useDispatch();

    //redux에 의해 관리되는 함수.
    //내부 함수는 react-redux가 실행한다.
    // 실행되면서 자동으로 구독과 해지가 설정된다.
    const counter = useSelector(state => state.counter)
    const show = useSelector(state => state.showCounter)

    const incrementHandler = () => {
        dispatch({
            type: INCREMENT
        })
    }
    const increseHandler = () => {
        dispatch({
            type: 'increse',
            amount: 5

        })
    }

    const decrementHandler = () => {
        dispatch({
            type: 'decrement'
        })
    }
  const toggleCounterHandler = () => {
      dispatch({
          type: 'toggle'
      })
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