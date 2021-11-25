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
                <div className="keen-slider__slide number-slide1">1</div>
                <div className="keen-slider__slide number-slide2">2</div>
                <div className="keen-slider__slide number-slide3">3</div>
                <div className="keen-slider__slide number-slide4">4</div>
                <div className="keen-slider__slide number-slide5">5</div>
                <div className="keen-slider__slide number-slide6">6</div>
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

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
