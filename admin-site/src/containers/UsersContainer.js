import React, { useCallback, useEffect } from 'react';
import Users from '../components/Users';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { addUser, deleteUser, getUsers } from '../modules/users';
// useSelector는 상태를 조회할때 사용합니다.


export default function UsersContainer() {
    const usersAPI = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    const onCreate = useCallback(data => dispatch(addUser(data)), [dispatch]);
    const onDelete = useCallback(id => dispatch(deleteUser(id)), [dispatch]);
    return(
        <Users 
            users={usersAPI.users.data.filter(user => user.isDeleted !== 1)}
            onCreate={onCreate}
            onDelete={onDelete}
        />
    )
}