import React, { FC } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";

interface PrivateRouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  path: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component, ...rest }) => {
  const Component = component;
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default PrivateRoute;
