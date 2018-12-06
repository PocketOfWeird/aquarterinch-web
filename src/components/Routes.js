import React from "react";
import { BrowserRouter as Router, Route as OpenRoute } from "react-router-dom";
import Route from './Route';
import Welcome from './Welcome';
import Home from './Home';


const Routes = (props) => (
   <Router>
       <div>
           <Route path="/" exact component={Home} {...props} />
           <OpenRoute path="/welcome" component={Welcome} {...props} />
       </div>
   </Router>
);

export default Routes;
