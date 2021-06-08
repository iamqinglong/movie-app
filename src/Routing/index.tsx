import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "../Pages/Home";
interface RouteProps {}

export const Route: React.FC<RouteProps> = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
