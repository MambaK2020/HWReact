import React from 'react';
import { connect } from 'react-redux';

const User = (props) => {
  return (
    <div>
       <h1>User Profile</h1>
      <h2>User Information</h2>
      <p>Name: {props.currentUser.name}</p>
      <p>Status: {props.currentUser.status}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    users: state.users
  };
};

export default connect(mapStateToProps)(User);