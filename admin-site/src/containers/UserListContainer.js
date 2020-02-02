import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../modules/users';
import UserList from '../components/UserList';

export default function UserListContainer() {
  const { data, loading, error} = useSelector(state => state.users.users )
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if(loading && !data) return <div>loading....</div>
  if(error) return <div>error occure!!</div>
  if(!data) return null;

  return <UserList users={data}/>
}