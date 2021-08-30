import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Routes
import PublicRoute from "../PublicRoute";
import PrivateRoute from "../PrivateRoute";

// Components
import Register from "../Register";
import Login from "../Login";
import Dashboard from "../Dashboard";

function AppRouter() {
  return (
    <Router>
      <PrivateRoute component={Dashboard} path="/" />
      <PublicRoute component={Register} path="/register" />
      <PublicRoute component={Login} path="/login" />
    </Router>
  );
}

export default AppRouter;
