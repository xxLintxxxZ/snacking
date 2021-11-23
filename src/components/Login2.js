import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router";

const styles = (theme) => ({
    palette: {
        primary: {
          main: '#8897e8',
          dark: '#7b2121',
        },
        secondary: {
          main: '#f48fb1',
        },
        background: {
          paper: '#cfd8e0',
        },
        text: {
          primary: "#6666d8",
          secondary: "#8c51ec",
        },
      },
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
      theme.spacing.unit * 3
    }px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function SignIn(props) {
  const { classes } = props;
  const [tokenMsg, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState("");

  let navigate = useNavigate();

  const URL = process.env.REACT_APP_URL;

  const login = async (username, password) => {
    try {
      const response = await fetch(URL + "/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      setMessage(response.statusText);
      console.log(response.ok);
      alert(message);
      setToken(data.detail);
      setCheck(response.ok);
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    if (check === true) {
      navigate("/");
    }
  });

  const routing = () => {
    if (check === true) navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("username"));
    login(data.get("username"), data.get("password"));
    routing();
    // const queryClient = useQueryClient();
    // import { useQueryClient } from "react-query";
  };
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="username" name="username" autoFocus />
          </FormControl>
          <FormControl
            margin="normal"
            onSubmit={handleSubmit}
            required
            fullWidth
          >
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
                  </Button>
          <div sx = {{py :2}} ><Typography component="h5" variant="h8">
            {tokenMsg}
          </Typography></div>
          <Link component={RouterLink} to="/signup" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </form>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
