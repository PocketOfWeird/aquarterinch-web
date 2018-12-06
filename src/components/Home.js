import React from 'react';
import LogoutButton from './LogoutButton';
import logo from '../logo.svg';


const Home = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome {props.user ? props.user.displayName : "You"}
      </p>
      <LogoutButton />
    </header>
  </div>
);

export default Home;
