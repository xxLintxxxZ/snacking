import * as React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
// import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import styles from "./mystyle.module.css";
import { Grid } from "@mui/material";
import Swal from "sweetalert2";

function BuyProductAlert() {
  const { prodId } = useParams();
  const [prod, setProd] = useState([]);
  // const [total, setTotal] = useState("");
  const [qtyBought, setQty] = useState("");
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
  }, [URL, prodId, refresh]);

  // [URL, prodId]
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

  const myalert = (num, total) => {
    Swal.fire({
      title: "Hey!",
      text: `Thanks for buying ${num} item(s). The total amount is ${total}.`,
      icon: "success",
      confirmButtonText: "See ya",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const qty = prod.quantity - data.get("quantity");
    setQty(data.get("quantity"));
    console.log(qtyBought);

    if (qty < 0)
      Swal.fire({
        title: "Oopps!",
        text: "You cannot buy more than the stocks available!",
        icon: "error",
      });
    else {
      add(prod.prodname, qty, prod.price);
      console.log(qtyBought);
      const total = data.get("quantity") * prod.price;
      const formatTotal = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(total);
      console.log(formatTotal);
      // console.log(total);
      
      //theState does not store information to show in alert as fast as I want
      setTimeout(function () {
        myalert(data.get("quantity"), formatTotal);
      }, 1000);

      setRefresh(true);
      setTimeout(function () {
        navigate("/products");
      }, 8000);
      setRefresh(false)
        return refresh;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Prod}>
        <Box component="div" sx={{ color: "primary.main", fontSize: 20 }}>
          Dear Buyer
        </Box>
        <Box
          component="div"
          sx={{ py: 3, color: "primary.main", fontSize: 16 }}
        >
          Key in the quantity that you would like to purchase in the quantity
          box. :)
        </Box>
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
      </div>
      <div className={styles.Input}>
        <Box
          component="div"
          sx={{ py: 5, color: "primary.main", fontSize: 22 }}
        >
          Buy Product {prod.prodname} ?
        </Box>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Box
            component="div"
            sx={{ py: 2, color: "primary.main", fontSize: 22 }}
          >
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
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Buy this product
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default BuyProductAlert;
