import React from 'react';
import logo from './logo.svg';
// import './App.css';
import UserListContainer from './containers/UserListContainer';
import { Route } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';

function App() {
  
  return (
    <>
      <Route path="/login" component={LoginPage} exact={true}/>
      <Route path="/" component={UserListPage} exact={true} />
      <Route path="/user/:id" component={UserPage} />
    </>
  );
}

export default App;
