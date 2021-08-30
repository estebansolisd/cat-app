import { Container, Grid } from "@material-ui/core";
import React, { FC } from "react";

const Login: FC<any> = (props) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <h1>Login</h1>
      </Grid>
    </Container>
  );
};

export default Login;
