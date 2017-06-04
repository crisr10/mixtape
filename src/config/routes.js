var React = require("react");

var router = require("react-router");

var Route = router.Route;

var IndexRoute = router.IndexRoute;

var Router = router.Router;

var browserHistory = router.browserHistory;

/* NEED TO MAKE HOME THE INDEX ROUTE*/

// var Home = require("../Home");
var Profile = require("../containers/Profile");

module.exports = (

  <Router history={browserHistory}>
    {/*<Route path="/" component={Home}>*/}
    <Route path="/" component={Profile}>
      {/*<Route path="Search" component={Search} />*/}
      {/*<Route path="Saved" component={Saved} />*/}

      <IndexRoute component={Profile} />

    </Route>
  </Router>
);
