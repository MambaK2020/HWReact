import React from 'react';
import { useSelector } from 'react-redux';

const UserList = () => {
  const users = useSelector((state) => state.users.list);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
