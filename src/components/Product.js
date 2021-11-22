import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const { prodId } = useParams();
  const [prod, setProd] = useState([]);
  let navigate = useNavigate();
  // const queryClient = useQueryClient();
  // const { status, data } = useQuery("prod", fetchTodo);


  const URL = process.env.REACT_APP_URL

  useEffect(() => {
    const fetchProd = async () => {
      const response = await fetch(URL +`/products/${prodId}/`);
      const prod = await response.json();
      setProd(prod);
    };

    fetchProd();
  });

  //* ==== Edit product =====
  
  const add = async (prodname, quantity, price) => {
    await fetch(URL +`/products/${prodId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prodname,
        quantity,
        price,
      }),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("prodname"));
    //   console.log(data.get('password'));
    add(data.get("prodname"), data.get("quantity"), data.get("price"));
    // const queryClient = useQueryClient();
    // import { useQueryClient } from "react-query";
    setTimeout(function () {
      navigate("/products");
    }, 3000);
  };

  return (
    <div>
      <h2>Product: {prodId}</h2>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pl: 6,
        }}
      >
        <Stack sx={{ pt: 2 }} direction="row" spacing={2} justifyContent="left">
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
                Name : {prod.prodname}
              </Typography>
              <Typography>Quantity {prod.quantity}</Typography>
              <Typography>Price : {prod.price}</Typography>
            </CardContent>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Product"
                  name="prodname"
                  // defaultvalue={prod.prodname}
                  placeholder = {prod.prodname}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="quantity"
                  label="Quantity"
                  // defaultValue={prod.quantity}
                  placeholder= {`${prod.quantity}`}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  // defaultValue={prod.price}
                  placeholder = {`${prod.price}`}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Edit this product
                </Button>
              </Box>
            </Box>
          </Card>
        </Stack>
      </Box>
    </div>
  );
}
