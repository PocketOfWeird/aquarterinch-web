import React from 'react';
import { Route as ReactRoute, Redirect } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const Route = ({ component: Component, ...rest }) => {
    return (
        <ReactRoute {...rest}
          render={props =>
              firebase.auth().currentUser ? (
              <Component {...props} />
            ) : (
              <Redirect to={{pathname: "/welcome", state: { from: props.location }}} />
            )
          }
        />
    );
}

export default Route;
