import React from 'react';
import firebase from 'firebase/app';
import settings from './tools/settings';
import Routes from './Routes.js';
import './App.css';


firebase.initializeApp(settings.firebase);

const App = (props) => (
    <Routes />
);

export default App;
