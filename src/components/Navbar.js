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
import { IconButton } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#8897e8",
    },

    text: {
      primary: "#6666d8",
      secondary: "#8c51ec",
    },
  },
});
export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
           
              <Link
                component={RouterLink}
                to="/"
                underline="hover"
                sx={{ color: "white" }}
              >
              <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
                <EmojiFoodBeverageIcon />
              
          </IconButton></Link>
          <Typography variant="h10" component="div" sx={{ flexGrow: 1, color:"white" }}>
           HOME
          </Typography>
          
                <Button
                  component={RouterLink}
                  to="/products"
                  sx={{ color: "white" }}
                >
                  Products
                </Button>
                <Button
                  component={RouterLink}
                  to="/addproduct"
                  sx={{ color: "white" }}
                >
                  Add Products
                </Button>
                <Button
                  component={RouterLink}
                  to="/login"
                  sx={{ color: "white" }}
                >
                  Login
                </Button>
          
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
