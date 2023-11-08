import {useReducer, useState} from "react";


const intialInputState ={
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {

    if(action.type === 'INPUT'){
        return { value: action.value, isTouched: state.isTouched}
    }
    if(action.type === 'BLUR'){
        return { isTouched: true, value: state.value}
    }
    if(action.type === 'RESET'){
        return { isTouched: false, value: ''}
    }

    return inputStateReducer;
}

const useInput = (validateValue) => {

    const [inputState, dispatchInputState ] = useReducer(
        inputStateReducer,
        intialInputState);
    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false);


    const isValid = validateValue(inputState.value);
    const hasError = !isValid && inputState.isTouched;
    // const isValid = validateValue(enteredValue);
    // const hasError = !isValid && isTouched;

    const valueChangeHandler = (event) => {
        dispatchInputState({
            type: 'INPUT', value: event.target.value
        })
        // setEnteredValue(event.target.value);
    }

    const inputBlurHandler = () => {
        dispatchInputState({
            type: 'BLUR'
        })
        // setIsTouched(true);
    }

    const reset = ( ) => {
        dispatchInputState({
            type: 'RESET'
        })
        // setEnteredValue('')
        // setIsTouched(false)
    }

    return{
        value : inputState.value,
        isValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;
