import React from "react";
import { CssBaseline } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import image from "./image/donut.jpg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import "./styles.css";
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

const Home2 = (props) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    slidesPerView: 3,
    spacing: 10,
  });

  return (
    <>
      <p>I need a coffeebreak</p>

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
            <Container>
              <img src={image} alt="logo" height="80" />
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                WELCOME TO SNACK SHOP
              </Typography>

              <img
                src="https://cdn4.vectorstock.com/i/thumb-large/29/58/cute-neon-linear-design-dessert-vector-38942958.jpg"
                width="200"
                height="247"
                alt=""
              />
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Awwww so blank
              </Typography>

              {/* ///// slide  //// Fun woth slides?????  */}
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"></div>
                <div className="keen-slider__slide number-slide2"></div>
                <div className="keen-slider__slide number-slide3"></div>
                <div className="keen-slider__slide number-slide4"></div>
                <div className="keen-slider__slide number-slide5"></div>
                <div className="keen-slider__slide number-slide6"></div>
              </div>
              {/* ///// slide  //// */}
              <Stack
                sx={{ pt: 4 }}
                direction="column"
                spacing={2}
                justifyContent="center"
              >
                <Typography
                  variant="h4"
                  align="center"
                  color="#ff4081"
                  paragraph
                >
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
    </>
  );
};

export default Home2;