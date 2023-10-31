import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
function Expense(props){

    const[filterYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    //필터를 이용하여 노출되는 데이터 조정하기
    const filteredExpenses = props.expense.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
            <div className='expenses'>
                <ExpensesFilter onChangeFilter={filterChangeHandler}></ExpensesFilter>
                {filteredExpenses.map( // 배열 순회 + 필터링 데이터.
                    (expense) => (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}></ExpenseItem>
                    )
                )}
            </div>
    );
}

export default Expense;