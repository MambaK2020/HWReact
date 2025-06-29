import React, { useState, useCallback, useMemo } from 'react';
import UserList from './UserList';

const FilterUserList = () => {
  const [filter, setFilter] = useState('');

  const userList = [
    { id: 1, name: 'Kobe Bryant' },
    { id: 2, name: 'Michael Jordan' },
    { id: 3, name: 'Lebron James' },
  ];

  const filterUsers = useCallback((users, filterText) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, []);

  const filteredUsers = useMemo(() => {
    return filterUsers(userList, filter);
  }, [filter, userList, filterUsers]);

  return (
    <div>
      <input
        type="text"
        placeholder="Фильтровать по имени"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default FilterUserList;