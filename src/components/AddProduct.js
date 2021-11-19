import React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function AddProduct() {

    // http://localhost:8000/products/
    let navigate = useNavigate();
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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get('prodname'));
        //   console.log(data.get('password'));
        add(data.get('prodname'), data.get('quantity'), data.get('price'))
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
                  required
                  fullWidth
                  label="Product"
                  name="prodname"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="quantity"
                  label="Quantity"
                />
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="price"
                  label="Price"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add
                </Button>
              </Box>
      
            </Box>
      
      );
    }

  export default AddProduct;
  