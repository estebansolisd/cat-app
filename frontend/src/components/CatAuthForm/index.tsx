import {
  Container,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import React, {
  FC,
  useState,
  useCallback,
  ChangeEvent,
  FormEvent,
} from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import axios from "axios";

// Local
import { useStyles } from "./style";
import { RegisterForm, FormProps, FormResult } from "../../types";

const Register: FC<FormProps> = ({ variant = "register" }) => {
  const classes = useStyles();
  const history = useHistory();
  const [form, setForm] = useState<RegisterForm>({
    email: "",
    password_confirmation: "",
    password: "",
    name: "",
  });
  const [formResult, setFormResult] = useState<FormResult>({
    errors: [],
    status: "idle",
  });

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
      case "password_confirmation":
      case "password":
      case "name":
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        break;
      default:
        break;
    }
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        setFormResult({ status: "loading", errors: [] });
        console.log(process.env.REACT_APP_BACKEND_URL, "proccess env");

        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}${
            variant === "register" ? "/api/register" : "/api/login"
          }`,
          variant === "register"
            ? form
            : { password: form.password, email: form.email }
        );

        
        setFormResult({
          status: "success",
          errors: [],
        });

        localStorage.setItem("cat_app", JSON.stringify(response.data));

        history.push("/")
        

      } catch (err) {
        setFormResult({
          status: "error",
          errors: [],
        });
        console.error(err, "handleSubmit");
      }
    },
    [variant, form]
  );

  return (
    <div className={classes.root}>
      <Container
        className={classes.container}
        maxWidth="md"
        component="form"
        onSubmit={handleSubmit}
      >
        <fieldset>
          <legend id="form-legend-id">
            <Typography variant="h6" align="center">
              {variant === "register" ? "Register" : "Login"}
            </Typography>
          </legend>
          <Grid container spacing={2} aria-labelledby="form-legend-id">
            <Grid item xs={12}>
              <Paper>
                <TextField
                  autoComplete="off"
                  variant="outlined"
                  onChange={handleChange}
                  value={form.email}
                  label="E-mail"
                  name="email"
                  inputProps={{ "aria-label": "Email" }}
                  fullWidth
                />
              </Paper>
            </Grid>
            {variant === "register" && (
              <Grid item xs={12}>
                <Paper>
                  <TextField
                    autoComplete="off"
                    variant="outlined"
                    onChange={handleChange}
                    value={form.name}
                    label="Name"
                    inputProps={{ "aria-label": "Name" }}
                    name="name"
                    fullWidth
                  />
                </Paper>
              </Grid>
            )}
            <Grid item xs={12}>
              <Paper>
                <TextField
                  autoComplete="off"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                  value={form.password}
                  inputProps={{ "aria-label": "Password" }}
                  label="Password"
                  name="password"
                  fullWidth
                />
              </Paper>
            </Grid>
            {variant === "register" && (
              <Grid item xs={12}>
                <Paper>
                  <TextField
                    autoComplete="off"
                    variant="outlined"
                    type="password"
                    onChange={handleChange}
                    value={form.password_confirmation}
                    inputProps={{ "aria-label": "Confirm password" }}
                    label="Confirm password"
                    name="password_confirmation"
                    fullWidth
                  />
                </Paper>
              </Grid>
            )}
            <Grid item xs={12}>
              <Link
                component={RouterLink}
                to={variant === "register" ? "/login" : "/register"}
              >
                {variant === "register" ? "Go to login" : "Go to register"}
              </Link>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Button
                type="submit"
                color="primary"
                variant="contained"
                size="large"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </fieldset>
      </Container>
    </div>
  );
};

export default Register;
