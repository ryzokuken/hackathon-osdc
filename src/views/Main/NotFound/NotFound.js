import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>You're lost in the library.</h1>
    <Link to="/home">Return home.</Link>
  </div>
)

export default NotFound;
