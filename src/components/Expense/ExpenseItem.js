import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(
    // 하나하나 키 값을 주고 받아 왔을 떄 props.date 와 같이 사용하는 것이 아닌
    // 디스트럭처링을 통하여 바로 키 호출로 값을 불러올 수 있다.
    //{date, title, amount}
    props // 객체 자체로 넘겨 받았을 때

) {
    return (
        <div className="expense-item">
            {/*<div>{date.toISOString()}</div>*/}
            {/*<div>{props.expense.date.toISOString()}</div>*/}
            {/*컴포넌트화 한 ExpenseDate로 props를 넘겨주고 JSX 를 return 받는다.*/}


            {/*부모 컴포넌트안에 자식 컴포넌트를 지정한다.*/}
            <Card className="expense-item__description">
                {/*<h2>{title}</h2>*/}
                <ExpenseDate date={props.expense.date}></ExpenseDate>
                <h2>{props.expense.title}</h2>
                {/*<div className="expense-item__price">${amount}</div>*/}
                <div className="expense-item__price">${props.expense.amount}</div>
            </Card>
        </div>
    );
}

export default ExpenseItem;