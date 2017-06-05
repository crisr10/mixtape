import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "../containers/App";
import Profile from "../containers/Profile";

export default () => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Profile}/>
            <Route path="/profile" component={Profile}/>
        </Route>
    );
};


