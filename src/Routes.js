import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeUnlogged from './components/HomeUnlogged';


const Routes = () => (
    <Router>
        <Route path="/" exact component={HomeUnlogged} />
    </Router>
);

export default Routes;
