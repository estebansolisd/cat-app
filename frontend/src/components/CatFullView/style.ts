import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullView: {
      height: "100vh",
      width: "100vw"
    },
  })
);
