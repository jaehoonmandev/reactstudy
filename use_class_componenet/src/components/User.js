import classes from './User.module.css';
import {Component} from "react";


class User extends Component{

  render(){ // 클래스형은 render()로 렌더링할 요소를 지정한다.
    //Component 로 인해서 this.를 사용할 수 있다.
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

//함수형 리액트 렌더링
/*const User = props => {
    return return <li className={classes.user}>{props.name}</li>;
}*/

export default User;
