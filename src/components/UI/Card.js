import './Card.css'

//자식 props 사용 컴포넌트.
function Card(props){
    const classes = 'card ' + props.className;
    return (
    <div className={classes}>
        {props.children}
    </div>
    );
}

export default Card;