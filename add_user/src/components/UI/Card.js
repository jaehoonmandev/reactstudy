import React from "react";

import styles from './Card.module.css'
const Card = props => {
    return(
        /*부모 객체에서 넘겨주는 스타일이 있다면 ${props.className}와 같이 추가 지정가능*/
      <div className={`${styles.card} ${props.className}`}>
          {props.children}
      </div>
    );
}

export default Card;