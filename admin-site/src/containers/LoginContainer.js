import React, { useState } from 'react';
import Login from '../components/Login';

const initialState = {
  id: '',
  password: ''
}

export default function LoginContainer() {
  const checkUser = () => {
    // 원래는 서버에서 check를 해줘야 합니다. 임시로 client에서 합니다.
    const url = "/login";

  }
  const [user, setUser] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
  }
  const handleSubmit = e => {
    e.preventDefault();
    checkUser();
    e.target.value = '';
  }
  return (
    <Login user={user} handleSubmit={handleSubmit} handleChange={handleChange}/>
  )
}