import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <div className="form-wrapper">
      <h1>User Profile</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;