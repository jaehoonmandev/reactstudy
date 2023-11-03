import React from "react";

import Card from "./Card";
import Button from "./Button";
import styles from "./ErorrModal.module.css"
const ErrorModal = props => {
    return (
        <div onClick={props.onErrorCheck}>
            <div className={styles.backdrop}>
                <Card className={styles.modal}>
                    <header className={styles.header}>
                        <h2>
                            {props.title}
                        </h2>
                    </header>
                    <div className={styles.content}>
                        {props.message}
                    </div>
                    <footer className={styles.actions}>
                        <Button onClick={props.onErrorCheck}>
                            Okay
                        </Button>
                    </footer>

                </Card>
            </div>
        </div>

    );
};

export default ErrorModal