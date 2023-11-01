import React from 'react';

import styled from "styled-components";
// import './Button.css';

//.button 메소드에 스타일을 전달하면 이를 토대로 새로운 버튼을 동적으로 반환한다.
// 클래스마다 고유한 이름을 가지게 하기에 내부적으로만 사용하기 위한 방법이다.
const Button = styled.button`
    /*className을 설정할 위치가 없기에 클래스 이름을 설정하지 않아도
    button에 직접적으로 영향을 준다.*/
    width: 100%;
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: #8b005d;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;
  
  @media (min-width: 768px){
    width: auto;
  }
  /*& 는 생성한 이 컴포넌트에 대해 특별한 가상선택자를 사용하겠다고 패키지에 선언.
  이 버튼에 focus가 있으면 스타일을 적용해줘라고 선언.*/
  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
