import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './login-view.scss';
export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
    // Send a request to the server for authentication
    // then call props.onLoggedIn(username)
    props.onLoggedIn(username);
  };

  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username: </Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)}></Form.Control>
      </Form.Group>

      <Form.Group controlId="fromPassword">
        <Form.Label>Password: </Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)}></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

LoginView.proptypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  onLoggedIn: PropTypes.func.isRequired,
};