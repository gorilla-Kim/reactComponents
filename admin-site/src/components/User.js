import React from 'react';

export default function User({ user }) {
  const { name, email, birthday } = user;
  return (
    <div>
      <h1>{name}</h1>
      <p>{email} || {birthday}</p>
    </div>
  )
}