import axios from 'axios';
// const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const getUsers = async () => {
  const response = await axios.get('http://localhost:4000/users');
  return response.data;
}

export const getUserById = async id => {
  const response = await axios.get(`http://localhost:4000/users/${id}`);
  return response.data;
}