import {createPortal} from 'react-dom';
import {motion} from "framer-motion";

export default function Modal({title, children, onClose}) {
    //const hiddenAnimationStat = {opacity:0, y:30}
    return createPortal(
        <>
            <div className="backdrop" onClick={onClose}/>
            <motion.dialog
                variants={{
                    hidden: {opacity:0, y:30},
                    visible: {opacity:1, y:0}
                }}/*재사용할 수 있는 변수*/
                initial="hidden"/* 상태 조건 지정이 불가능하다면 초기값 지정*/
                animate="visible"/*variants로 지정한 id로 스타일 지정가능.*/
                exit="hidden" /*삭제 시*/
                open
                className="modal">
                <h2>{title}</h2>
                {children}
            </motion.dialog>
        </>,
        document.getElementById('modal')
    );
}
