
import ExpenseItem from "./components/Expense/ExpenseItem";
import Expense from "./components/Expense/Expense";
function App() {
    const expenses = [
        {
            id: 'e1',
            title:'Toliet Paper' ,
            amount: 94.12,
            date: new Date(2023, 10,25)
        },
        {
            id: 'e2',
            title:'Car Insurance' ,
            amount: 294.67,
            date: new Date(2023, 10,26)
        },
        {
            id: 'e3',
            title:'Coffee' ,
            amount: 7.8,
            date: new Date(2023, 10,26)
        }

    ];

    // 기존의 JS는 document.createElement/getElementById 와 같이 지정하지만.
    // 리액트는 이 작업을 직접 지정하지 않는다.
  return (
        <Expense expense={expenses}></Expense>
  );
}

export default App;
