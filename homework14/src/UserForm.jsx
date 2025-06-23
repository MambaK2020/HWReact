import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions';

const UserForm = (props) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUserInfo(name, status);
    setName('');
    setStatus('');
  };

  return (
    <div>
      <h2>Change information for users</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  setUserInfo
};

export default connect(null, mapDispatchToProps)(UserForm);