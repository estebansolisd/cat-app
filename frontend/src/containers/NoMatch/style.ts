import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    centered: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
  })
);
