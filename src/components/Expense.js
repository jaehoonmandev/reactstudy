import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
function Expense(props){

    return (
            <div className='expenses'>
                {props.expense.map( // 배열 순얖
                    (expense) => (
                        <ExpenseItem
                            expense={expense}></ExpenseItem>
                    )
                )}
            </div>
    );
}

export default Expense;