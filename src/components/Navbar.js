import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#8897e8',
      },
    
      text: {
        primary: '#6666d8',
        secondary: '#8c51ec',
      },
    }
  });
export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100px",
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <div style={{ display: "flex", flex: 1, justifyContent: "left" }}>
              <Link
                component={RouterLink}
                to="/"
                underline="hover"
                sx={{ color: "white" }}
              >
                <Button
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <Typography sx={{ pr: 2 }}>
                    <EmojiFoodBeverageIcon />
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Home
                  </Typography>
                </Button>
              </Link>
            </div>

            <Typography
              variant="h6"
              component="div"
              sx={{
                flex: 1,
                color: "white",
                minHeight: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              SNACK SHOP
            </Typography>
            <Typography
              style={{ display: "flex", flex: 1, justifyContent: "right" }}
            >
              <Button component={RouterLink} to="/products" sx={{ color: "white" }}>
                Products
              </Button>
              <Button component={RouterLink} to="/login" sx={{ color: "white" }}>
              Login
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
