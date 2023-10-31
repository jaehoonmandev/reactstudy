
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

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

    //자식의 자식이 넘겨준 데이터 핸들링하기.
    const addExpenseHandler = (expense) => {
        console.log('In App.js');
        console.log(expense)
    }

    // 기존의 JS는 document.createElement/getElementById 와 같이 지정하지만.
    // 리액트는 이 작업을 직접 지정하지 않는다.
  return (
      <div>
          {/*자식에데 데이터를 넘겨 받을 속성(포인터) 추가*/}
          <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
          <Expense expense={expenses}></Expense>
      </div>
  );
}

export default App;
