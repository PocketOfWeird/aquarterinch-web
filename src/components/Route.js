import React from 'react';
import { Route as ReactRoute, Redirect } from "react-router-dom";


const Route = ({ component: Component, ...rest }) => (
    <ReactRoute {...rest}
      render={props =>
          props.user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: "/welcome", state: { from: props.location }}} />
        )
      }
    />
);

export default Route;
