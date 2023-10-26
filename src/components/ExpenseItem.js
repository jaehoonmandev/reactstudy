import './ExpenseItem.css'

function ExpenseItem(
    // 하나하나 키 값을 주고 받아 왔을 떄 props.date 와 같이 사용하는 것이 아닌
    // 디스트럭처링을 통하여 바로 키 호출로 값을 불러올 수 있다.
    //{date, title, amount}
    props // 객체 자체로 넘겨 받았을 때

) {

    return (
        <div className="expense-item">
            {/*<div>{date.toISOString()}</div>*/}
            <div>{props.expense.date.toISOString()}</div>
            <div className="expense-item__description">
                {/*<h2>{title}</h2>*/}
                <h2>{props.expense.title}</h2>
                {/*<div className="expense-item__price">${amount}</div>*/}
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;