import React from 'react';

export const UserItem = ({ user }) => {
  return (
    <li key={user.key}>
      {user.name}
    </li>
  )
}

export default function UserList({ users }) {
  return (
    <ul>
      {
        users.map(user => <UserItem user={user}/> )
      }
    </ul>
  )
}