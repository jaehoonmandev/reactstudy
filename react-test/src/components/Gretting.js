import {useState} from "react";
import Output from "./Output";

const Gretting = () => {
    const [changesText, setChangesText] = useState(false)
    const changeTextHandler = () => {
        setChangesText(true)
    }
    return (
        <div>
            <h2>Hello World!</h2>
            {!changesText && <Output>Good to See you!</Output>}
            {changesText && <Output> Changed!</Output>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
}
export default Gretting