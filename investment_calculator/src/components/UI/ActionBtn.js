
import styles from './ActionBtn.module.css'
const ActionBtn = (props) => {
    return (
        <p className={styles.actions}>
            <button type="reset" className={styles.buttonAlt}
                    onClick={props.resetBtn}>
                Reset
            </button>
            <button type="submit" className={styles.button}>Calculate
            </button>
        </p>
    );
}
export default ActionBtn;