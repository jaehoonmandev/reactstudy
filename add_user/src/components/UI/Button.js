import React from "react";

import styles from './Button.module.css';


const Button = props => {
    return (
        <button className={styles.button}
                type={props.type || 'button'} /*타입이 지정되지 않았다면 button 타입 default*/
                onClick={props.onClick}
        > {props.children}
        </button>
    )
}

export default Button;