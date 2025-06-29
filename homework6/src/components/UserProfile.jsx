import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/UserProfile.module.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const userData = response.data.results[0];
      setUser(userData);
    } catch (error) {
      console.error('Ошибка при загрузке пользователя', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      {!user ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.profile}>
          <img src={user.picture.large} alt="User" className={styles.avatar} />
          <h2>{user.name.first} {user.name.last}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.country}</p>
          <button onClick={fetchUser} className={styles.button}>
            Загрузить другого пользователя
          </button>
        </div>
      )}
    </div>
  );
};


export default UserProfile;
