import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'
const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enterdExpenseData) => {
          const expenseData = {
              ...enterdExpenseData,
              id: Math.random().toString()
          };
          //부모에게 넘겨주기.
          props.onAddExpense(expenseData);
    };

    const startEditingHandler = ()  => {
        setIsEditing(true);
    }

    const endEditingHandler = () => {
        setIsEditing(false);
    }

    return (
      <div className="new-expense">
          {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
          {/*부모에게 데이터를 전달하기 위한 속성을 추가.(포인터로 전달)*/}
          {isEditing && <ExpenseForm
              endEditingHandler = {endEditingHandler}
              onSaveExpenseData={saveExpenseDataHandler} > </ExpenseForm>}
      </div>
    );
}

export default NewExpense;