import {Fragment, useState, useEffect, Component} from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component{
  constructor() {
    super();
    this.state ={
      filteredUsers: [],
      searchTerm:''
    }
  }


  componentDidMount() {
    if(DUMMY_USERS.length !==0){
      this.setState({filteredUsers : DUMMY_USERS})
    }else{
      throw new Error('NO USERS')
    }
  }

  // 상태 변화로인한 재평가가 되면 자동으로 호출 (useEffect 대체)
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.searchTerm !== this.state.searchTerm){ // 무한 루프를 막기위해 이전 상태와 비교.
      this.setState({
            filteredUsers: DUMMY_USERS.filter((user) =>
                user.name.includes(this.state.searchTerm)
      ),
    });
    }
  }

  componentWillUnmount() {

  }

  searchChangeHandler(event){
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return (
        <Fragment>
          <div className={classes.finder}>
            <input type='search' onChange={this.searchChangeHandler} />
          </div>
          <Users users={this.state.filteredUsers} />
        </Fragment>
    );
  }

}

/*const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};*/

export default UserFinder;