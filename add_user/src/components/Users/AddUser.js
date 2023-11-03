import React, {useState, useRef} from "react";
import Card from "../UI/Card";
import styles from  './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import Wrapper from "../Helper/Wrapper";
const AddUser = props => {
    /*ref 사용을 위한 HOOK 선언*/
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    
    const initState = {
        'username': '',
        'age': ''
    }

    /*const [userData, setUserData] = useState(initState);*/

    const [error, setError] = useState()

    /*const inputChangeHandler = (input, value) => {
        setUserData((prevState) => {
            return{
                ...prevState,
                [input] : value,
                id: Math.random().toString()
            }
        })
    }*/

    const addUserHandler = event => {
        event.preventDefault();

        //ref로 return받은 요소 핸들링.
        //ref는 DOM의 요소를 retunr하며, current 라는 객체의 이름으로 가져온다.
        if(nameInputRef.current.value.trim().length === 0 || ageInputRef.current.value.trim().length === 0)
            /*if(userData['username'].trim().length === 0 || userData['age'].trim().length === 0)*/
        {
            setError({
                title: "Invalid input",
                message: "Plase enter a valid name and age(non-empty values)."
            });
            return;
        }
        if(+ageInputRef < 1)
            /*if(+userData['age'] < 1)*/
        {
            setError({
                title: "Invalid age",
                message: "Plase enter a valid age."
            });
            return;
        }
        /*props.onAddUser(userData);
        setUserData(initState);*/
        props.onAddUser(
            {
                'username' : nameInputRef.current.value,
                'age' : ageInputRef.current.value
            });
        /*초기화*/
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error &&
                <ErrorModal title={error.title} message={error.message} onErrorCheck={errorHandler} />
            }
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor={"username"}>Username</label>
                    <input
                        id={"username"}
                        type={"text"}
                        /*value={userData['username']}
                        onChange={(event) => (
                            inputChangeHandler('username', event.target.value)
                        )}*/
                        ref={nameInputRef}//ref 속성 설정.
                    />
                    <label htmlFor={"age"}>Age</label>
                    <input
                        id={"age"}
                        type={"number"}
                        /*value={userData['age']}
                        onChange={(event) => (
                            inputChangeHandler('age', event.target.value)
                        )}*/
                        ref={ageInputRef}/>
                    <Button type={"submit"}> Add User </Button>
                </form>
            </Card>
        </Wrapper>

    );
}

export default AddUser