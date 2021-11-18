import React from "react";
import { CssBaseline } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#8247E6",
    },
    secondary: {
      main: "#4c94f6",
    },
    background: {
      default: "#fff",
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
            bgcolor: "background.paper",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              WELCOME TO SNACK SHOP
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
           Awwww so blank
            </Typography>

            <img
              src="https://cdn4.vectorstock.com/i/thumb-large/29/58/cute-neon-linear-design-dessert-vector-38942958.jpg"
              width="200"
              height="247"
              alt=""
            />

            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Typography variant="h4" align="center" color="#ff4081" paragraph>
                Snacks from different countries
              </Typography>

              <Box sx={{ bgcolor: "#8545F9", color: "white" }}>
               Awww such empty!
              </Box>

              <br />
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          ~ You said it best ... when u say nothing at all ~
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Home;
