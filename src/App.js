import React, {Component} from 'react';
import Routes from './components/Routes.js';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import settings from './tools/settings';


firebase.initializeApp(settings.firebase);


class App extends Component {
    constructor(props) {
        super(props)
        this.state = { user: null }
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => user && this.setState({
                user: {
                    displayName: user.displayName,
                    uid: user.uid
                }
        }));
    }
    render() {
        return (
            <Routes user={this.state.user} />
        );
    }
}

export default App;
