import React, { FC } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { isLoggingIn } from "../../util";

interface PrivateRouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component, ...rest }) => {
  const Component = component;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggingIn() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default PrivateRoute;
