import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeUnlogged from './components/HomeUnlogged';


const Routes = (props) => (
    <div>
        <Route path="/" exact component={HomeUnlogged} />
    </div>
);

export default Routes;
