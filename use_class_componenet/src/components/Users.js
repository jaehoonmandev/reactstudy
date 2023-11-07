import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';


class Users extends Component{
    //인스턴스 화 될 때, 즉 이랙트가 컴포넌트로 사용되는 클래스를 만날 떄 호출.
    constructor() {
        super(); // Component 를 호출.
        this.state = {
            showUsers : true,
            more: 'Test'
        };
    }
  // 클래스 안에 메서드 선언
  toggleUsersHandler() {
        this.setState((curState) => {
            return { showUsers: !curState.showUsers };
        })
  }
  render() {
      const usersList = (
          <ul>
              {this.props.users.map((user) => (
                  <User key={user.id} name={user.name} />
              ))}
          </ul>
      );

    return (
        <div className={classes.users}>
            {/*bind는 평가가 될 시점에 동일한 내용을 가지게한다.
            reder() 밖에 있으니 this 키워드 사용.*/}
          <button onClick={this.toggleUsersHandler.bind(this)}>
            {this.state.showUsers ? 'Hide' : 'Show'} Users
          </button>
          {this.state.showUsers && usersList}
        </div>
    )
  }
}

/*const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};*/

export default Users;
