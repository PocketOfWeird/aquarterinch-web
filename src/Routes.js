import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeUnlogged from './components/HomeUnlogged';


const Routes = () => (
    <Router>
        <div>
            <Route path="/" exact component={HomeUnlogged} />
        </div>
    </Router>
);

export default Routes;
