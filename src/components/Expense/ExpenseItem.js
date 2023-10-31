import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
//동작을 재정의하기 위한 특정 라이브러리를 가져온다.
import React, {useState } from "react";
function ExpenseItem(
    // 하나하나 키 값을 주고 받아 왔을 떄 props.date 와 같이 사용하는 것이 아닌
    // 디스트럭처링을 통하여 바로 키 호출로 값을 불러올 수 있다.
    //{date, title, amount}
    props // 객체 자체로 넘겨 받았을 때

) {
    // 이벤트로 인한 변경을 재평가 하기 위한 함수.
    // useState(props.expense.title) 아규먼트 안에 초기값을 지정.
    // 요소의 [초기값을 사용할 변수명, 이벤트에 동작할 함수 이름]을 지정한다.
    const [title, setTitle] = useState(props.expense.title);

    const clickHandler = () => {
        setTitle('Updated');
    }
    return (
        <div className="expense-item">
            {/*<div>{date.toISOString()}</div>*/}
            {/*<div>{props.expense.date.toISOString()}</div>*/}
            {/*컴포넌트화 한 ExpenseDate로 props를 넘겨주고 JSX 를 return 받는다.*/}

            {/*부모 컴포넌트안에 자식 컴포넌트를 지정한다.*/}
            <Card className="expense-item__description">
                <h2>{title}</h2>
                <ExpenseDate date={props.expense.date}></ExpenseDate>
                {/*<div className="expense-item__price">${amount}</div>*/}
                <div className="expense-item__price">${props.expense.amount}</div>
                {/*클릭 이벤트 버튼 요소 추가*/}
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </div>
    );
}

export default ExpenseItem;