import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import makeRoutes from "./config/routes";

ReactDOM.render(
    <Router history={browserHistory}>
        {makeRoutes()}
    </Router>,
    document.getElementById("root")
);
