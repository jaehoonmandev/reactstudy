import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// import styled from "styled-components";

//JSX 로 이용할 것이기에 이름은 대문자로 시작.
// 내부 div에서만 지정될 스타일을 동적으로 지정.
// const FormControl = styled.div`
//       margin: 0.5rem 0;
//
//     & label {
//       font-weight: bold;
//       display: block;
//       margin-bottom: 0.5rem;
//       color:  ${props => props.invalid ? 'red' : 'black'};
//     }
//
//     & input {
//       display: block;
//       width: 100%;
//       border: 1px solid ${props=> props.invalid ? 'red' : '#ccc' };
//       background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
//       font: inherit;
//       line-height: 1.5rem;
//       padding: 0 0.25rem;
//     }
//
//     & input:focus {
//       outline: none;
//       background: #fad0ec;
//       border-color: #8b005d;
//     }
//   `;

const CourseInput = props => {


  const [enteredValue, setEnteredValue] = useState('');

  const [isValid, setIsValid] = useState(true); // 입력 상태 체크 State

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length >0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    //아무 것도 입력 되지 않았을 때
    if(enteredValue.trim().length ===0){
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/*컴포넌트 내부에서만 적용될 스타일 지정 태그 호출.
      호출 시에 invalid을 동적으로 넘겨줘 styled components 내에서 ${} 을 이용해 조건을 설정할 수 있다.*/}
      {/*<FormControl invalid={!isValid}>*/}
      {/*styles[] 를 사용하여 특정 이름을 가진 클래스를 호출한다.*/}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/*</FormControl>*/}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
