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

    //변수를 지정함으로써 조건부 데이터 노출 위치에 변수만 선언함으로 간단하게 표현가능하다. (JSX 덕분에 변수에 HTML 코드를 넣을 수 있다.
    let expensesContent = <p> no item</p>; //기본

    if(filteredExpenses.length > 0 ){ // 요소가 있다면
        expensesContent = // 변수로 지정한 요소에 JSX 렌더링 데이터를 넣는다.
                filteredExpenses.map( // 배열 순회 + 필터링 데이터.
                    (expense) => (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}>
                        </ExpenseItem>
                    )
                )
    }
    return (
            <div className='expenses'>
                <ExpensesFilter
                    selected={{filterYear}}
                    onChangeFilter={filterChangeHandler}
                ></ExpensesFilter>
                {/*아이템의 유무에 따른 조건부 데이터 노출*/}
                {expensesContent}

            </div>
    );
}

export default Expense;