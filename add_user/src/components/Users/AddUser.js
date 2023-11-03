import React, {useState} from "react";
import Card from "../UI/Card";
import styles from  './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import Wrapper from "../Helper/Wrapper";
const AddUser = props => {
    const initState = {
        'username': '',
        'age': ''
    }

    const [userData, setUserData] = useState(initState);

    const [error, setError] = useState()

    const inputChangeHandler = (input, value) => {
        setUserData((prevState) => {
            return{
                ...prevState,
                [input] : value,
                id: Math.random().toString()
            }
        })
    }

    const addUserHandler = event => {
        event.preventDefault();

        if(userData['username'].trim().length === 0 || userData['age'].trim().length === 0)
        {
            setError({
                title: "Invalid input",
                message: "Plase enter a valid name and age(non-empty values)."
            });
            return;
        }
        if(+userData['age'] < 1)
        {
            setError({
                title: "Invalid age",
                message: "Plase enter a valid age."
            });
            return;
        }
        props.onAddUser(userData);
        setUserData(initState);
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
                        value={userData['username']}
                        onChange={(event) => (
                            inputChangeHandler('username', event.target.value)
                        )}
                    />
                    <label htmlFor={"age"}>Age</label>
                    <input
                        id={"age"}
                        type={"number"}
                        value={userData['age']}
                        onChange={(event) => (
                            inputChangeHandler('age', event.target.value)
                        )}/>
                    <Button type={"submit"}> Add User </Button>
                </form>
            </Card>
        </Wrapper>

    );
}

export default AddUser