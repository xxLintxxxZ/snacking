import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3f51b5",
    },

    text: {
      primary: "#6666d8",
      secondary: "#8c51ec",
    },
  },
});

export default function Login() {
  const [show, setShow] = useState(true);
  const [tokenMsg, setToken] = useState("");
  const [message, setMessage] = useState("");

  const login = async (username, password) => {
    try {
      const response = await fetch(
        "https://snackshop589.herokuapp.com/api/token/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const data = await response.json();
      setMessage(response.statusText);
      // console.log(data.access);
      
      alert(message)
      setToken(data.detail)
      // console.log(message)
    } catch (error) {
      setMessage(error.message);
    }
  };

  // const addTodo = async () => {
  //   const body = JSON.stringify({
  //     subject: "Another",
  //     details: "New todo",
  //   });

  //   await fetch("https://snackshop589.herokuapp.com/todos/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + token,
  //     },
  //     body,
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("username"));
    //   console.log(data.get('password'));
    login(data.get("username"), data.get("password"));
    // const queryClient = useQueryClient();
    // import { useQueryClient } from "react-query";
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setShow((a) => !a)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link component={RouterLink} to="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <button disabled > {tokenMsg} </button>
          <div style={{ display: show ? "block" : "none" }}>hello</div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
