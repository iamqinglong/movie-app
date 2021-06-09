import React from "react";
import { RouteComponentProps, Switch, Route } from "react-router-dom";
import routes from "../config/routes";
interface RouteProps {}

export const Routing: React.FC<RouteProps> = () => {
  return (
    <>
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
    </>
  );
};
