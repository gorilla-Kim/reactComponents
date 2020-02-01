import React from 'react';
import logo from './logo.svg';
// import './App.css';
import UserListContainer from './containers/UserListContainer';
import { Route } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserPage from './pages/UserPage';

function App() {
  
  return (
    <>
      <Route path="/" component={UserListPage} exact={true} />
      <Route path="/:id" component={UserPage} />
    </>
  );
}

export default App;
