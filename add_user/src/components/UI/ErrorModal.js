import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErorrModal.module.css"


/*Portal을 사용하기 위해 요소를 변수화 시킨다.*/
const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onErrorCheck} />
        );
}

const ModalOverlay = props => {
    return (
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
    );
}
const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                    //랜더링할 요소, 속성을 넘겨줄 수 있다.
                    <Backdrop
                        onErrorCheck={props.onErrorCheck}/>
                    // 렌더링할 실제 요소에 접근
                    // index.js 에서 root 요소를 찾은 것과 같은 로직이다.
                    , document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onErrorCheck={props.onErrorCheck}/>
                , document.getElementById('overlay-root')
            )}
        </React.Fragment>


    );
};

export default ErrorModal