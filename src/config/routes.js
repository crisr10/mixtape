import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "../App";
import Profile from "../containers/Profile";
// import Home from "../containers/Home";

export default () => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Profile}/>
            {/*<Route path="/home" component={Home}/>*/}
        </Route>
    );
};


