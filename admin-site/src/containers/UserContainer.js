import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from '../components/User';
import { getUser } from '../modules/users';

export default function UserContainer({ userId }) {
  const { data, loading, error } = useSelector( state => state.users.user );
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUser(userId));
  }, [userId, dispatch]);

  if(loading) return <div>loading....</div>
  if(error) return <div>error occure!!</div>
  if(!data) return null;

  return (
    <User user={data} />
  );
}