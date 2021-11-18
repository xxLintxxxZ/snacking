
// import { useQuery, useQueryClient } from "react-query";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";

function Products() {
    const [prod, setProd] = useState([]);
  
    // const queryClient = useQueryClient();
    // const { status, data } = useQuery("prod", fetchTodo);
  
    // https://snackshop589.herokuapp.com/products/
  
    useEffect(() => {
      const fetchTodo = async () => {
        const response = await fetch("https://snackshop589.herokuapp.com/products/");
        const prod = await response.json();
        setProd(prod)
      };
  
      fetchTodo();
    }, [])
  
   //if i fetch ("http://localhost:8000/todo/"). typo in address u see the below status;
    // if (status === "loading") {
    //   return <span>Loading...</span>;
    // }
  
    // if (status === "error") {
    //   return <span>Error</span>;
    // }
  return (
      <Container sx={{ py: 6 }} fixed>
      <Grid container spacing={4}>
            {prod.map((item,key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    maxWidth: 400,
                    maxHeight: 600 
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
                  <CardContent sx={{ flexGrow: 1  }}>
                    <Typography gutterBottom sx={{fontWeight: 'bold'}}>
                      Name : {item.prodname}
                    </Typography>
                    <Typography >
                     Quantity {item.quantity}
                    </Typography>
                    <Typography >
                      Price : {item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', margin: '0 auto' }}>
                      <Button size="small">View</Button></Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
      </Grid>
      </Container>
    );
  }
  
  export default Products;
  
