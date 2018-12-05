import React from "react";
import { BrowserRouter as Router, Route as OpenRoute } from "react-router-dom";
import Route from './Route';
import Welcome from './Welcome';
import Home from './Home';


const Routes = () => (
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <OpenRoute path="/welcome" component={Welcome} />
        </div>
    </Router>
);

export default Routes;
