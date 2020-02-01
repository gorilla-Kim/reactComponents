import React from 'react';
import logo from './logo.svg';
// import './App.css';
import UsersContainer from './containers/UsersContainer';
import UserList from './components/UserList';
import UserListContainer from './containers/UserListContainer';

function App() {
  return (
    <div className="App">
      <UserListContainer />
    </div>
  );
}

export default App;
