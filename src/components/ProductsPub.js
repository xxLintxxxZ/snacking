// import { useQuery, useQueryClient } from "react-query";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// require('dotenv').config()
import { CircularProgress } from "@mui/material";

// function commarize() {
//   // Alter numbers larger than 1k
//   if (this >= 1e3) {
//     var units = ["K", "M", "B", "T"];

//     // Divide to get SI Unit engineering style numbers (1e3,1e6,1e9, etc)
//     let unit = Math.floor(((this).toFixed(0).length - 1) / 3) * 3
//     // Calculate the remainder
//     var num = (this / ('1e'+unit)).toFixed(2)
//     var unitname = units[Math.floor(unit / 3) - 1]

//     // output number remainder + unitname
//     return num + unitname
//   }

//   // return formatted original number
//   return this.toLocaleString()
// }
// // Add method to prototype. this allows you to use this function on numbers and strings directly
// Number.prototype.commarize = commarize
// String.prototype.commarize = commarize

function ProductsPub() {
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [refresh, setRefresh] = useState(false);

  // let navigate = useNavigate();
  // const queryClient = useQueryClient();
  // const { status, data } = useQuery("prod", fetchTodo);
  const URL = process.env.REACT_APP_URL;

  // http://localhost:8000/products/
  // process.env.REACT_URL
  // console.log(process.env.REACT_APP_URL + "/products")

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(URL + "/products");
      const prod = await response.json();
      setProd(prod);
      setLoading(false);
    };
    fetchTodo();
  }, [URL]);

  console.log(prod);

  return (
    <Container sx={{ px : 5, py: 6 }} fixed>
      <div>
        {loading ? (
          <div>
            <CircularProgress color="secondary" /> <br />
            Page is loading...{" "}
          </div>
        ) : null}
      </div>
      <Grid container spacing={5}>
        {prod.map((item, key) => (
          <Grid item key={key} xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 400,
                maxHeight: 600,
              }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: "bold" }}>
                {item.prodname}
                </Typography>
                {/* <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  Index : {key}
                </Typography> */}
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  height: 200,
                  width: "100%",
                  maxHeight: 200,
                }}
                image={item.image}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                Price : ${item.price}
                </Typography>
                {/* <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  Index : {key}
                </Typography> */}
                <Typography>
                  Quantity: {item.quantity.toLocaleString()}
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </Container>
  );
}

export default ProductsPub;
