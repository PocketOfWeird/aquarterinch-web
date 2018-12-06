import React, {Component} from 'react';
import Button from 'antd/lib/button';
import firebase from 'firebase/app';
import 'firebase/auth';


class LogoutButton extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
    }

    logout() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <Button type="primary" icon="google" size="large" onClick={this.logout}>
                Logout of Google
            </Button>
        );
    }

}

export default LogoutButton;
