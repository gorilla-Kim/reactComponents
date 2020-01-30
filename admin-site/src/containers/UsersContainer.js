import React, { useCallback } from 'react';
import Users from '../components/Users';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../modules/users';
// useSelector는 상태를 조회할때 사용합니다.

export default function UsersContainer() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    const onCreate = useCallback(data => dispatch(addUser(data)), [dispatch]);

    return(
        <Users 
            users={users}
            onCreate={onCreate}
        />
    )
}