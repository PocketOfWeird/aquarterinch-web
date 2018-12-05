import React from 'react';
import Button from 'antd/lib/button';
import logo from './logo.svg';

const HomeUnlogged = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to A Quarter Inch
      </p>
      <Button type="primary">Login</Button>
    </header>
  </div>
);

export default HomeUnlogged;
