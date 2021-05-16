import React from "react";

//local css

import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Erros from "./pages/Erros";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthWrapper from "./pages/AuthWrapper";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Erros />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
};

export default App;
