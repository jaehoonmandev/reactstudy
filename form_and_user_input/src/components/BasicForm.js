import useInput from "../hooks/use-input";

const BasicForm = (props) => {

    const firstNameValid = value => value.trim() !== '';
    const lastNameValid = value => value.trim() !== '';
    const emailValid = value => value.includes('@');

    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        inputBlurHandler: firstNameBlur,
        valueChangeHandler: firstNameChange,
        reset: resetFirstName
    } = useInput(firstNameValid);
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        inputBlurHandler: lastNameBlur,
        valueChangeHandler: lastNameChange,
        reset: resetlastName
    } = useInput(lastNameValid);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        inputBlurHandler: emailBlur,
        valueChangeHandler: emailChange,
        reset: resetemail
    } = useInput(emailValid);



    let formIsValid = false;

    if(firstNameIsValid && lastNameIsValid && emailIsValid){
        formIsValid = true;
    }

    const onSubmitHandler = () => {
        if(formIsValid) {
            resetFirstName()
            resetlastName()
            resetemail()
        }
    }

    const firstNameClasses =
        firstNameHasError
            ? "form-control invalid"
            : "form-control"

    const lastNameClasses =
        lastNameHasError
            ? "form-control invalid"
            : "form-control"

    const emailClasses =
        emailHasError
            ? "form-control invalid"
            : "form-control"

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName'
                           value={firstNameValue}
                           onBlur={firstNameBlur}
                           onChange={firstNameChange}/>
                    {firstNameHasError && <p className={'error-text'}> Put First Name</p> }
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='lsatName'>Last Name</label>
                    <input type='text' id='lsatName'
                           value={lastNameValue}
                           onBlur={lastNameBlur}
                           onChange={lastNameChange}/>
                    {lastNameHasError && <p className={'error-text'}> Put Last Name</p> }
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input type='text' id='email'
                       value={emailValue}
                       onBlur={emailBlur}
                       onChange={emailChange}/>
                {emailHasError && <p className={'error-text'}> Put Email Correctly</p> }
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
