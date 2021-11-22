import React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProduct() {
  const { prodId } = useParams();
  const [prod, setProd] = useState([]);
  // http://localhost:8000/products/
  let navigate = useNavigate();

  useEffect(() => {
    const fetchProd = async () => {
      const response = await fetch(
        `https://snackshop589.herokuapp.com/products/${prodId}`
      );
      const prod = await response.json();
      setProd(prod);
    };

    fetchProd();
  });

  const add = async (prodname, quantity, price) => {
    await fetch(`https://snackshop589.herokuapp.com/products/${prodId}/`, {
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
    navigate("/products");
  };

  return (
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
          defaultvalue={prod.prodname}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <form action= {`https://snackshop589.herokuapp.com/products/${prodId}/?_method=PUT`} >
            <input type="text" id="fname" name="prodname" placeholder={prod.prodname} />
            <input type="text" id="fname" name="quantity" placeholder={prod.quantity} />
            <input type="text" id="fname" name="price" placeholder={prod.price} />
               <input type="submit" value="Edit Fruit" />
                </form> */}
        <TextField
          margin="normal"
          required
          fullWidth
          name="quantity"
          label="Quantity"
          defaultValue={prod.quantity}
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
          defaultValue={prod.price}
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
  );
}

export default EditProduct;
