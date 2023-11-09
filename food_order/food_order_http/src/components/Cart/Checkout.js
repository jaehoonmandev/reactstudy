import classes from './Checkout.module.css'
import {useRef, useState} from "react";

//상태 검증
const isEmpty = value => value.trim() === '';
const isNotFiveChars = value => value.trim().length !== 5;

const Checkout = props => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();
    const confirmHandler = (event) => {
        event.preventDefault();

        //입력된 실제 요소가 있는 값 읽기
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredCitIsValid = !isEmpty(enteredCity)
        const enteredPostalIsValid = !isNotFiveChars(enteredPostal)

        // const formIsValid = enteredNameIsValid &&
        //     enteredStreetIsValid &&
        //     enteredCitIsValid &&
        //     enteredPostalIsValid

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCitIsValid,
            postalCode: enteredPostalIsValid
        })

        if(!formInputValidity){
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostal
        })
    }

    const nameControlClasses = `${classes.control} ${!formInputValidity.name ? 'invalid' : ''}`;
    const streetControlClasses = `${classes.control} ${!formInputValidity.street ? 'invalid' : ''}`;
    const postalControlClasses = `${classes.control} ${!formInputValidity.postalCode ? 'invalid' : ''}`;
    const cityControlClasses = `${classes.control} ${!formInputValidity.city ? 'invalid' : ''}`;

    return (
        <form onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor={"name"}> Your name</label>
                <input type={"text"} id={"name"} ref={nameInputRef}/>
                {!formInputValidity.name && <p>Please enter a valid name</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor={"street"}> Street</label>
                <input type={"text"} id={"street"} ref={streetInputRef}/>
                {!formInputValidity.street && <p>Please enter a valid street</p>}
            </div>
            <div className={postalControlClasses}>
                <label htmlFor={"postal"}> Post Code</label>
                <input type={"text"} id={"postal"} ref={postalInputRef}/>
                {!formInputValidity.postalCode && <p>Please enter a valid postcode</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor={"city"}> City</label>
                <input type={"text"} id={"city"} ref={cityInputRef}/>
                {!formInputValidity.city && <p>Please enter a valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onToggleOrder}> Cancel</button>
                <button type={"submit"} className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout