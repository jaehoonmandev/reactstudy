import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = (props) => {

    if(props.items.length === 0){
        return <h2 className={"expenses-list__fallback"}>Found No Expenses</h2>
    }

    return (
        props.items.map( // 배열 순회 + 필터링 데이터.
            (expense) => (
                <ExpenseItem
                    key={expense.id}
                    expense={expense}>
                </ExpenseItem>
            )
        )
    );
}

export default ExpensesList;