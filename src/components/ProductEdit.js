import * as React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
// import CardMedia from "@mui/material/CardMedia";
// import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import styles from "./mystyle.module.css";
import { Grid } from "@mui/material";
import { InputAdornment } from "@mui/material";

export default function ProductEdit() {
  const { prodId } = useParams();
  const [prod, setProd] = useState([]);
  let navigate = useNavigate();
  // const queryClient = useQueryClient();
  // const { status, data } = useQuery("prod", fetchTodo);

  const URL = process.env.REACT_APP_URL;

  useEffect(() => {
    const fetchProd = async () => {
      const response = await fetch(URL + `/products/${prodId}/`);
      const prod = await response.json();
      setProd(prod);
      console.log(typeof prod.quantity);
     console.log(prod)
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
    const newQty = prod.quantity - data.get("quantity");
    console.log(newQty);
    add(data.get("prodname"), data.get("quantity"), data.get("price"));
    // const queryClient = useQueryClient();
    // import { useQueryClient } from "react-query";
    setTimeout(function () {
      navigate("/products");
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.Prod}>
        <Box
          component="img"
          sx={{
            height: 300,
            width: "auto",
            maxHeight: 300,
          }}
          alt="the snack "
          src={prod.image}
        />
        <Box component="div" sx={{ py:2 ,color: "primary.main", fontSize: 16 }}>
          Original Price: ${prod.price}
        </Box>
        <Box
          component="div"
          sx={{ color: "primary.main", fontSize: 16 }}
        >
          Original Quantity: {prod.quantity}
        </Box>
      </div>
      <div className={styles.Input}>
        <Box
          component="div"
          sx={{ py: 2, color: "primary.main", fontSize: 22 }}
        >
          Edit product {prod.prodname}
        </Box>
        <Box
          component="form"
          name="PostName"
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <Box
            component="div"
            sx={{ py: 2, color: "primary.main", fontSize: 22 }}
          >
            <TextField
              margin="normal"
              fullWidth
              name="prodname"
              label="Name"
              onChange="PostName.submit()"
              // defaultvalue={prod.prodname}
              placeholder={prod.prodname}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="quantity"
                label="Quantity"
                type="number"
                inputProps={{ min: 0, max: 3000 }}
                placeholder={`${prod.quantity}`}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                fullWidth
                required
                name="price"
                label="Price"
                inputProps={{ min: 0, max: 5000 }}
                InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>, }}
                helperText="Only accepts up to 2 decimal places"
                placeholder={`${prod.price}`}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update the changes
          </Button>
        </Box>
      </div>
    </div>
  );
}
