import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router";
import { Avatar } from "@mui/material";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Alert } from "@mui/material";
import {atom, useAtom} from 'jotai'

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: "#6666d8",
      secondary: "#8c51ec",
    },
  },
});

export const testAtom = atom('')

function Login({ getToken}) {
  const [tokenMsg, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState("");
  const [showAlert, setAlert] = useState(false);
  

const [isLog, setLog] = useAtom(testAtom)
console.log(isLog)
  let navigate = useNavigate();

  const URL = process.env.REACT_APP_URL;

  const login = async (username, password) => {
    try {
      // URL + "/api/token/"
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
      console.log(data)
      setLog(sessionStorage.setItem('token', data.access));
      setMessage(response.statusText);
      // console.log(response)
      console.log(response.ok);
      setToken(data.detail);
      setCheck(response.ok);
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    if (check === true) {
      if (document.getElementById("username").value === 'admin')
      {console.log(document.getElementById("username").value)
        setTimeout(function () {
          navigate("/productsAdmin");
        }, 2000);
      } else{
      setTimeout(function () {
        navigate("/productsbuy");
      }, 2000);}
    }
  });

  const routing = () => {
    if (check === true) {
      if (document.getElementById("username").value === 'admin')
      {console.log(document.getElementById("username").value)
        setTimeout(function () {
          navigate("/productsAdmin");
        }, 2000);
      }
      else { setTimeout(function () {
        navigate("/productsbuy");
      }, 2000);}
      setAlert(false)
    }
    else {
      setAlert(true);
    }
  };

  console.log(message);
  console.log(tokenMsg);

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon/>
                </Avatar>
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
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{py: 3 }}>
            {" "}
            <div>
              {showAlert ? <Alert severity="error">{message}{"!"}<br/>{tokenMsg} </Alert> : <></>}
            </div>{" "}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


export default (Login);
