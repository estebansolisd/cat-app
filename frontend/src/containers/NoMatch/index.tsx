import { Typography, Link } from "@material-ui/core";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

import CatFullView from "../../components/CatFullView";
import { useStyles } from "./style";

const NoMatch: FC = () => {
  const classes = useStyles();
  return (
    <CatFullView className={classes.centered}>
      <Typography variant="h6">404</Typography>
      <Link component={RouterLink} to="/">
        Go home
      </Link>
    </CatFullView>
  );
};

export default NoMatch;
