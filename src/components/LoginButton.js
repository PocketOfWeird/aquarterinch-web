import React, {Component} from 'react';
import Button from 'antd/lib/button';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


class Login extends Component {
    constructor(props) {
      super(props);
      // Don't call this.setState() here!
      this.state = { counter: 0 };
      this.login = this.login.bind(this);
    }

    login() {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }

    render() {
        return (
            <Button type="primary" icon="google" size="large" onClick={this.login}>
                Login with Google
            </Button>
        );
    }

}

export default Login;
