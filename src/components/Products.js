// import { useQuery, useQueryClient } from "react-query";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Products() {
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false)
  //  const [status, setStatus] = useState(null);
  let navigate = useNavigate();
  // const queryClient = useQueryClient();
  // const { status, data } = useQuery("prod", fetchTodo);
  
  // https://snackshop589.herokuapp.com/products/
  // http://localhost:8000/products/

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch("https://snackshop589.herokuapp.com/products/");
      const prod = await response.json();
      setProd(prod);
      setLoading(false)
    };

    fetchTodo();
  }, []);

console.log(prod)
  //if i fetch ("http://localhost:8000/todo/"). typo in address u see the below status;
  // if (status === "loading") {
  //   return <span>Loading...</span>;
  // }

  // if (status === "error") {
  //   return <span>Error</span>;
  // }

  const del = async (a,b) => {
    await fetch("https://snackshop589.herokuapp.com/products/" + a, {
      method: "DELETE",
    }).then((res) => res.text())
      .then(res => console.log(res));
    
    prod.splice(b,1)
    setRefresh(true)
    //  // or res.json()
    setTimeout(function () {
      navigate("/products");
    }, 5000);
    setRefresh(false)
    return refresh
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
       <div>{loading ? "loading..." : null}</div>
      <Grid container spacing={4}>
        {prod.map((item, key) => (
          <Grid item key={key} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 400,
                maxHeight: 600,
              }}
            >
              {/* <CardMedia
                    component="img"
                    sx={{
                      height: 150,
                      maxHeight: 150
                      
                    }}
                    image={item.img}
                    alt="random"
                  /> */}
              
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  Name : {item.prodname}
                </Typography>
                <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                  Index : {key}
                </Typography>
                <Typography>Quantity {item.quantity}</Typography>
                <Typography>Price : {item.price}</Typography>
              </CardContent>
              <CardActions>
                <Link
                  to={`/products/${item.id}`}
                  style={{ textDecoration: "none", margin: "0 auto" }}
                >
                  <Button size="small">View</Button>
                </Link>
                <Button onClick={() => del(item.id, key)} size="small">
                  Delete
                </Button>
                {/* <Link
                  to={`/products/edit/${item.id}`}
                  style={{ textDecoration: "none", margin: "0 auto" }}
                >
                  <Button size="small">Edit</Button>
                </Link> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </Container>
  );
}

export default Products;
