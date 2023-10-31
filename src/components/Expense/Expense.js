
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
                <ExpensesFilter
                    selected={filterYear}
                    onChangeFilter={filterChangeHandler}
                ></ExpensesFilter>
                <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
                {/*아이템의 유무에 따른 조건부 데이터 노출*/}
                <ExpensesList items = {filteredExpenses} />
            </div>
    );
}

export default Expense;