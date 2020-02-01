import React from 'react';
import { Link } from 'react-router-dom';

export const UserItem = ({ user }) => {
  return (
    <li>
      <Link to={`/${user.id}`}>{user.name}</Link>
    </li>
  )
}
export default function UserList({ users }) {
  return (
    <ul>
      {
        users.map(user => <UserItem key={user.id} user={user}/> )
      }
    </ul>
  )
}