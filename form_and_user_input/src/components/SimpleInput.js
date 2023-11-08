import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

    const {
        value: entedName,
        valueIsValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== ''); //인자에 함수를 넣어주면 useInput에서 받아온 함수를 사용한다.


    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    }   = useInput( value => value.includes('@'));


    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // 폼 제출 시
    const formSubmitHandler = event => {
        event.preventDefault();

        //입력되지 않았다면.
        if (!enteredNameIsValid) {
            return;
        }
        resetNameInput();
        resetEmailInput()
    }

    const nameInputClasses =
        nameInputHasError
            ? 'form-control invalid'
            : 'form-control ';

    const emailInputClasses =
        emailInputHasError
            ? 'form-control invalid'
            : 'form-control ';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name'
                       onChange={nameChangeHandler}
                       onBlur={nameBlurHandler}
                />
                {enteredNameIsValid && <p className={"error-text"}>Name must not be empty</p>}
            </div>
            <div className={nameInputClasses}>
                <label htmlFor='email'>Your email</label>
                <input type='text' id='email'
                       onChange={emailChangeHandler}
                       onBlur={emailBlurHandler}
                />
                {enteredEmailIsValid && <p className={"error-text"}>Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
