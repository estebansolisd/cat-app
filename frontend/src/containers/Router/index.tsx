import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Routes
import PublicRoute from "../PublicRoute";
import PrivateRoute from "../PrivateRoute";

// Components
import Register from "../../components/CatAuthForm";
import Login from "../Login";
import Dashboard from "../Dashboard";
import NoMatch from "../NoMatch";

function AppRouter() {
  return (
    <Router>
      <PrivateRoute exact component={Dashboard} path="/" />
      <PublicRoute component={Register} path="/register" />
      <PublicRoute component={Login} path="/login" />
      <Route path="*">
        <NoMatch />
      </Route>
    </Router>
  );
}

export default AppRouter;
