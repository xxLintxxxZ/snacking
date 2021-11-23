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

export default function BuyProduct() {
  const { prodId } = useParams();
  
  const [prod, setProd] = useState([]);
    let navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);
  // const queryClient = useQueryClient();
  // const { status, data } = useQuery("prod", fetchTodo);

  const URL = process.env.REACT_APP_URL;

  useEffect(() => {
    const fetchProd = async () => {
      const response = await fetch(URL + `/products/${prodId}/`);
      const prod = await response.json();
      setProd(prod);
    };

    fetchProd();
  }, [URL, prodId]);

  //* ==== Edit product =====

  const add = async (prodname, quantity, price) => {
    await fetch(URL + `/products/${prodId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prodname, quantity, price
      }),
    });
  };

  //? To have a field for sales?

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const qty = prod.quantity - data.get("quantity");
    console.log(qty);
    if (qty < 0) alert("You cannot buy more than the stock available!");
    else {
        add(prod.prodname, qty, prod.price)
        setRefresh(true);
       
        setTimeout(function () {
          navigate("/products");
        }, 2000);
        setRefresh(false);
        return refresh;
    }
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
                {prod.prodname}
              </Typography>
              <Typography>
                {/* Quantity: {prod.quantity.toLocaleString(undefined, { maximumFractionDigits: 2 })} */}
                Quantity: {prod.quantity}
              </Typography>
              <Typography>Price : ${prod.price}</Typography>
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
                  disabled
                  label="Product"
                  name="prodname"
                  value={prod.prodname}
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
                  placeholder={`${prod.quantity}`}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  disabled
                  fullWidth
                  name="price"
                  label="Price"
                  // defaultValue={prod.price}
                  value={prod.price}
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
                  Buy this product
                </Button>
              </Box>
            </Box>
          </Card>
        </Stack>
      </Box>
    </div>
  );
}
