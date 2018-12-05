import React from 'react';
import { Provider } from 'react-firebase';
import { initializeApp } from 'firebase';
import settings from './tools/settings';
import Routes from './Routes.js';
import './App.css';


const firebaseApp = initializeApp(settings.firebase);

const App = (props) => (
    <Provider firebaseApp={firebaseApp}>
        <Routes />
    </Provider>
);

export default App;
