import React, {useState, useEffect, useReducer, useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  if(action.type==='USER_INPUT'){
    return { value : action.val, isValid: action.val.includes('@') };
  }

  if(action.type === 'INPUT_BLUR') {
    return {
      value: state.value, // 최신 스냅샷
      isValid: state.value.includes('@')
    };
  }
  return { value: '', isValid: false};
};



const passwordReducer = (state, action) => {
  if(action.type==='USER_INPUT'){
    return {
      value : action.val,
      isValid: action.val.trim().length > 6};
  }

  if(action.type === 'INPUT_BLUR') {
    return {
      value: state.value, // 최신 스냅샷
      isValid: state.value.trim().length > 6
    };
  }
  return { value: '', isValid: false};

};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  const ctx = useContext(AuthContext);


  const [emailState, dispatchEmail] = useReducer(emailReducer,
      { // 초기값 설정.
        value : '',
        isValid: false
      }
  );

  const [passwordState, dispatchPassword] = useReducer(passwordReducer,
      {
        value: '',
        isValid: false
      });

  //비밀먼호가 이미 검증 되었을 때 추가로 입력했을 떄 또 검증을 수행하는것을 막는다.
  const {
    isValid: emailIsValid //값을 할단한게 아니라 디스트럭처링 후 별명을 붙여줬다.
  } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('valid')
      setFormIsValid(
          //최초 실행 시 실행
          emailIsValid&& passwordIsValid
      );
    }, 500);
    //클린업 함수
    return () => {
      console.log('clean up');
      // 타이핑을 할 때마다(의존하는 컴포넌트에 변화가 일어날 때마다) 타이머가 다시 설정된다.
      // 함수가 실행되기 전에 항상 실행되기에 타이핑이 계속된다면 타이머를 재성정하고, 입력이 멈춘 후 동작을 수행한다.
      clearTimeout(identifier);
    };
  }, [setFormIsValid, emailIsValid, passwordIsValid]);



  const emailChangeHandler = (event) => {
    dispatchEmail({
      type:'USER_INPUT',
      val: event.target.value
    });
    //setEnteredEmail(event.target.value);

    setFormIsValid(
        emailState.isValid && passwordState.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type:'INPUT_BLUR'
    });
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({
      type: 'USER_INPUT',
      val: event.target.value
    });
    setFormIsValid(
      passwordState.isValid && emailState.isValid
    );
  };


  const validatePasswordHandler = () => {
    //setPasswordIsValid(passwordState.isValid);
    dispatchPassword({
      type: 'INPUT_BLUR'
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.isValid, passwordState.isValid);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
