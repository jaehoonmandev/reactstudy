
import ExpenseItem from "./components/ExpenseItem";

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
    <div>
        <h2>Let's get started!</h2>
        <p>This is also visible!</p>
        <ExpenseItem
            /*title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}*/
            expense={expenses[0]}
        ></ExpenseItem>
        <ExpenseItem
            /*title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}*/
            expense={expenses[1]}
        ></ExpenseItem>
        <ExpenseItem
            /*title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}*/
            expense={expenses[2]}
        ></ExpenseItem>
    </div>
  );
}

export default App;
