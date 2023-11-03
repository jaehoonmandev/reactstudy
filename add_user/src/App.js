import React, {useState} from 'react';

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";






function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (userData) => {
        console.log(userData);
        setUsersList(prevState => [userData, ...prevState]);
    };



  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
        {!usersList && <p>No User.</p>}
        {usersList && <UserList users={usersList}/>}
    </div>
  );
}

export default App;