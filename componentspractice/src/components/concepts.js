import Concept from "./concept";
import '../assets/css/concepts.css'
const Concepts = (props) =>{

    return (
        <ul id="concepts">
            {
                props.concepts.map(
                    (concept) =>
                        <Concept concept={concept}></Concept>
                )
            }
        </ul>
    );
}
export default Concepts;