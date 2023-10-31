import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enterdExpenseData) => {
          const expenseData = {
              ...enterdExpenseData,
              id: Math.random().toString()
          };
          //부모에게 넘겨주기.
          props.onAddExpense(expenseData);
    };
    return (
      <div className="new-expense">
          {/*부모에게 데이터를 전달하기 위한 속성을 추가.(포인터로 전달)*/}
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} > </ExpenseForm>
      </div>
    );
}

export default NewExpense;