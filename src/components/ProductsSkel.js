// import { useQuery, useQueryClient } from "react-query";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
// require('dotenv').config()
import Skeleton from "@mui/material/Skeleton";
import { CardHeader } from "@mui/material";
import { Avatar } from "@mui/material";

function ProductsSkel() {
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  let navigate = useNavigate();
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

  const del = async (a, b) => {
    await fetch(URL + "/products/" + a, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => console.log(res));

    prod.splice(b, 1);
    setRefresh(true);

    setTimeout(function () {
      navigate("/products");
    }, 5000);
    setRefresh(false);
    return refresh;
  };

  // if (refresh === true) {
  //   // setTimeout(function () {
  //   //   navigate("/products");
  //   // }, 5000);
  //   navigate("/products")
  //   if (loading === false) {
  //     setRefresh(false)
  //   }
  // }

  return (
    <Container sx={{ py: 6 }} fixed>
      {/* <div>{loading ? "loading..." : null}</div> */}
      <Grid container spacing={5}>
        {prod.map((item, key) => (
          <Grid item key={key} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, m: 1 }}>
              <CardHeader
                avatar={
                  loading ? (
                    <Skeleton
                      animation="wave"
                      variant="circular"
                      width={40}
                      height={40}
                    />
                  ) : (<>
                    <Avatar 
                      alt="Ted talk"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVv1ImJaUqwcgoNZyjEqGYanY-QJbUcXnhQ&usqp=CAU"
                      />
                      <Typography gutterBottom sx={{ pl:8, py:1, justifyContent: 'flex-start', fontWeight: "bold" }}>
                      {item.prodname}
                    </Typography></>
                  )
                }
              />
              {loading ? (
                <Skeleton
                  sx={{ height: 190 }}
                  animation="wave"
                  variant="rectangular"
                />
              ) : (
                <CardMedia
                  component="img"
                  height="180"
                  width="100%"
                  image={item.image}
                  alt="snack yo"
                />
              )}

              <CardContent>
                {/* <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  Index : {key}
                </Typography> */}
                <Typography>Quantity: {item.quantity.toLocaleString()}</Typography>
                <Typography>Price : ${item.price}</Typography>
                {loading ? (
                  <>
                    <Skeleton
                      animation="wave"
                      height={10}
                      style={{ marginBottom: 6 }}
                    />
                    <Skeleton animation="wave" height={10} width="80%" />
                  </>
                ) : (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="p"
                  >
                    {
                      "Why snacking is sooooo irristable "
                    }
                  </Typography>
                )}
              </CardContent>
              {loading ? (
                <>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </>
              ) : (
                <CardActions>
                  <Link
                    to={`/products/${item.id}`}
                    style={{ textDecoration: "none", margin: "0 auto" }}
                  >
                    <Button size="small">View</Button>
                  </Link>
                  <Link
                    to={`/products/buy/${item.id}`}
                    style={{ textDecoration: "none", margin: "0 auto" }}
                  >
                    <Button size="small">Buy</Button>
                  </Link>
                  <Button onClick={() => del(item.id, key)} size="small">
                    Delete
                  </Button>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </Container>
  );
}

export default ProductsSkel;
