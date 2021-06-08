import React from "react";
import {
  BrowserRouter as Router,
  RouteComponentProps,
  Switch,
  Route,
} from "react-router-dom";
import routes from "../config/routes";
interface RouteProps {}

export const Routing: React.FC<RouteProps> = () => {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            );
          })}
        </Switch>
      </Router>
    </>
  );
};
