import React, {useState} from "react";

import './ExpenseForm.css'
const ExpenseForm = () => {
    // 재평가 되어도 값을 유지 하기 위해.
    // 값은 컴포넌트안에 여러개의 State가 있는건 정상이다.
    // 값이 넘어올 때는 항상 String이 때문에 String으로 초기화 된다.
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');


    //이벤트를 하나의 State로 묶어서 관리할 수 있다.
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    const titleChangeHandler = (event) => {
        // 업데이트하려는 값을 수동으로 지정해준다.
        // setUserInput({
        //     ...userInput, // 다른 값들을 유지하기 위해 모든 key-value를 가져와
        //     enteredTitle: event.target.value// 특정한 키를 지정하여 새 객체에 추가.
        // });

        // 이전 상태에 의존할 때 올바른 이전 상태를 참고하기 위해 새로운 객체를 넘겨준다.
        // 리액트는 상태 업데이트를 보존하고 즉시 수행하지 않기 때문에 올바른 스냅샷에 의존하지 않을 수 있다.
        // 최신 스냅샷을 유지하기 위해서 아래와 같이 안전한 방법을 쓴다.
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        });

    };
    const amountChangeHandler = event => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    };
    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };

    return (
        <form>
            <div className={"new-expense__controls"}>
                <div className={"new-expense__control"}>
                    <label> Title </label>
                    <input type={"text"} onChange={titleChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label> Amount </label>
                    <input
                        type={"number"} min={"0.01"} step={"0.01"}
                        onChange={amountChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label> Date </label>
                    <input
                        type={"date"} min={"2023-10-31"} max={"2023-12-31"}
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            {/*양식 제출*/}
            <div className={"new-expense__actions"}>
                <button type={"submit"}> Add Expense </button>
            </div>
        </form>
    );
};

export default ExpenseForm;