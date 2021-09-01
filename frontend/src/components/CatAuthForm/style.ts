import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    root:{
      height: "100vh",
      width: "100vw",
      background: "url(/cat.jpg) no-repeat center center / cover"
    }
  })
);
