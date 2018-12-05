import React from 'react';
import LogoutButton from './LogoutButton';
import logo from '../logo.svg';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const Home = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome {firebase.auth().currentUser.displayName}
      </p>
      <LogoutButton />
    </header>
  </div>
);

export default Home;
