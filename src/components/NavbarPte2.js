import React from "react";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import styles from "./mystyle.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8897e8",
      dark: "#7b2121",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      paper: "#cfd8e0",
    },
    text: {
      primary: "#6666d8",
      secondary: "#8c51ec",
    },
  },
});

export default function NavBarPte2() {

  const [user, setUser] = useState(true);

  const handleClick = () => {
    sessionStorage.clear();
    setUser(false)
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <AppBar position="static"> */}

      <nav className={styles.menu_bar}>
        <div className={styles.group}>
          <Link
            component={RouterLink}
            to="/"
            underline="hover"
            sx={{ pl: 3, color: "white" }}
            className={styles.title}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 30 }}
            >
              <HomeWorkOutlinedIcon />
            </IconButton>
          </Link>
        </div>
        <div className={styles.group}>
          {/* <Button component={RouterLink} to="/productsBuy" sx={{ py: 2, color: "white" }}>
            Products
          </Button> */}
          {/* <Button
            component={RouterLink}
            to="/productsbuy"
            sx={{  color: "white" }}
          >
            Buy Products
          </Button> */}
          <div className={styles.group}>
            {user ? 
              <Button component={RouterLink} to="/" onClick={() => {
              handleClick();
            }} sx={{ pr: 3, color: "white" }}>
            LogOut
          </Button> :  <> <Button component={RouterLink} to="/productsPub" sx={{ py: 2, color: "white" }}>
            Products
          </Button> <Button component={RouterLink} to="/login"   sx={{ pr: 3, color: "white" }}>
            LogIn
          </Button> </>}
            </div>
        </div>
      </nav>

      {/* </AppBar> */}
    </ThemeProvider>
  );
}
