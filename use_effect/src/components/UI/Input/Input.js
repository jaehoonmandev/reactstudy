import React, {useRef, useImperativeHandle} from "react";
import classes from "./Input.module.css";

//두 번째 인자에서 ref를 가져올 수 있다.
const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return{// 바깥에서 사용할수 있는 값을 설정한다.
            focus: activate
        };
    });
    return(
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;