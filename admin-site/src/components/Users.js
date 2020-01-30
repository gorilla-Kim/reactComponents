import React, { useState } from 'react';

function UserItem({ user }) {
    return (
        <li>
            id: {user.id} | name: {user.name} | email: {user.email} | createAt: {user.createAt} | isDeleted: {user.isDeleted}
        </li>
    )
}

function UserList({ users }) {

    return (
        <ul>
            {users.map(user => <UserItem 
                key={user.id}
                user={user}
            />)}
        </ul>
    )
} 

const initialState = {
    name: '',
    email: '',
    birthday: '',
}

export default function Users({ users, onCreate }) {
    const [inputs, setInputs] = useState(initialState);
    const onChange = e => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value});
    }
    const onSubmit = e => {
        e.preventDefault();
        onCreate(inputs);
        setInputs(initialState);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="name"  value={inputs.name} onChange={onChange} placeholder="insert your name"/>
                <input type="date" name="birthday" value={inputs.birthday}  onChange={onChange} placeholder={new Date().getTime()} />
                <input type="email" name="email" value={inputs.email}  onChange={onChange} placeholder="example@example.com"/>
                <button type="submit">ADD</button>
            </form>
            <UserList users={users} />
        </div>
    )
}
/*
        id: 0,
        name: 'gorilla-Kim',
        birthday: 960322,
        email: '00ghks22@naver.com',
        createAt: new Date().getTime,
        isDeleted: 0
*/