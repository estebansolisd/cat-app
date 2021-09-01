import React, { FC } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { isLoggingIn } from "../../util";

interface PublicRouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  path: string;
}

const PublicRoute: FC<PublicRouteProps> = ({ component, ...rest }) => {
  const Component = component;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggingIn() ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
export default PublicRoute;
