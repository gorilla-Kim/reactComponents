import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from '../components/User';
import { getUser } from '../modules/users';
import { reducerUtils } from '../lib/asyncUtils';

export default function UserContainer({ userId }) {
  const { data, loading, error } = useSelector( 
    state => state.users.user[userId] || reducerUtils.initial()
  );
  const dispatch = useDispatch();

  useEffect(()=>{
    if(data) return;
    dispatch(getUser(userId));
  }, [userId, dispatch, data]);

  if(loading && !data) return <div>loading....</div>
  if(error) return <div>error occure!!</div>
  if(!data) return null;

  return (
    <User user={data} />
  );
}