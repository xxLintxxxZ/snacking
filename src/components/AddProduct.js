import * as React from "react";
import Box from "@mui/material/Box";
// import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import styles from "./mystyle.module.css";
import { Grid } from "@mui/material";
import { useState } from "react";
import { InputAdornment } from "@mui/material";

function AddProduct() {
let navigate = useNavigate();
const [prod, setProd] = useState([]);

  const add = async (prodname, quantity, price) => {
    await fetch("https://snackshop589.herokuapp.com/products/", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify({
           prodname, quantity, price
       }),
       }    
    );
 setProd(JSON.stringify({
  prodname, quantity, price
 }))
    // console.log(prod)
    setProd(prod);
    setTimeout(function () {
      navigate("/products");
    }, 1000);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log(data.get('prodname'));
      //   console.log(data.get('password'));
    add(data.get('prodname'), data.get('quantity'), data.get('price'))
      // const queryClient = useQueryClient();
      // import { useQueryClient } from "react-query";
  };

  return (
    <div className={styles.container}>
      <div className={styles.Prod}>
        <Box
          component="img"
          sx={{ py:3,
            height: 300,
            width: "auto",
            maxHeight: 300,
          }}
          alt="the snack "
          src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/snacks-in-america.jpg?quality=82&strip=all"
        />
      </div>
      <div className={styles.Input}>
        <Box
          component="div"
          sx={{ py: 2, color: "primary.main", fontSize: 22 }}
        >
          Add product
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
              required
              fullWidth
              label="Product"
              name="prodname"
              inputProps={{ maxLength: 150 }}
              autoFocus
            />
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="number"
                inputProps={{ min: 0, max: 5000 }}
                name="quantity"
                label="Quantity"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                inputProps={{ min: 0, max: 5000 }}
                InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>, }}
                helperText="Only accepts up to 2 decimal places"
                name="price"
                label="Price"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default AddProduct;