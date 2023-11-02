import React,{useState} from "react";
import styles from './Form.module.css'
import ActionBtn from "../UI/ActionBtn";
const Form = (props) => {

// 초기값을 변수화 시켜 반복적으로 생성되지 않게 하기.
    const initialUserInput= {
        'current-savings': 10000,
        'yearly-contribution': 1200,
        'expected-return': 7,
        'duration': 10
    }


    /*const [enteredCurrent , setCurrent] = useState('');
    const [enteredContribution , setContribution] = useState('');
    const [enteredExpected , setExpected] = useState('');
    const [enteredDuration , setDuration] = useState('');*/

    const [userInput, setUserInput] =useState(initialUserInput);



    const inputChangehandler = (input, value) => {
        setUserInput((prevInput) => { // 이전 값을 불러와
            return{
                ...prevInput, // 이전 값에
                // input의 키마다 값 설정 하여 갱신.
                [input] : +value // '+' 기호는 문자열을 숫자로 변환
            };
        });
    };

    const resetHandler =() => {
        /*setCurrent('');
        setContribution('');
        setExpected('');
        setDuration('');*/
        setUserInput(initialUserInput);
    }

    const submitHandler =(event) => {
        event.preventDefault();

        props.onCalculate(userInput);

        // const investmentData = {
        //     current : enteredCurrent,
        //     contribution : enteredContribution,
        //     expected : enteredExpected,
        //     duration : enteredDuration
        // }
        //
        // props.calculate(investmentData);
        //
        // setCurrent('');
        // setContribution('');
        // setExpected('');
        // setDuration('');
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={`${styles['input-group']}`}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings"
                           value={userInput['current-savings']} /*프로퍼티의 키 값으로 값에 접근 가능.*/
                           onChange={(event) =>
                               inputChangehandler('current-savings', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution"
                           value={userInput['yearly-contribution']}
                           onChange={(event) =>
                               inputChangehandler('yearly-contribution', event.target.value)}
                    />
                </p>
            </div>
            <div className={`${styles['input-group']}`}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return"
                           value={userInput['expected-return']}
                           onChange={(event) =>
                               inputChangehandler('expected-return', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration"
                           value={userInput['duration']}
                           onChange={(event) =>
                               inputChangehandler('duration', event.target.value)}
                    />
                </p>
            </div>

            <ActionBtn
                resetBtn={resetHandler}/>

        </form>
    );
}

export default Form;