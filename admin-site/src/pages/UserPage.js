import React from 'react';
import UserContainer from '../containers/UserContainer';

export default function UserPage({ match }) {
  const { id } = match.params;
  const userId = parseInt(id, 10);

  return (
    <div>
      <UserContainer userId={userId} />
    </div>
  )
}