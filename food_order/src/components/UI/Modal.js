import {Fragment} from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.ononCloseCart}></div>
};

const ModalOverlays = props => {
    return (
      <div className={classes.modal}>
          <div className={classes.content}>
              {props.children}
          </div>
      </div>
    );
}

const portalEelement = document.getElementById('overlays')
const Modal = props => {
    return (
        <Fragment>
            {/*<Backdrop></Backdrop>
            <ModalOverlays>{props.children}</ModalOverlays>*/}
            {ReactDOM.createPortal(<Backdrop ononCloseCart={props.ononCloseCart}/>,portalEelement)}
            {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalEelement)}
        </Fragment>
    )
}

export default Modal;