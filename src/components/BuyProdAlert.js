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
import { InputAdornment } from "@mui/material";

function BuyProductAlert() {
  const { prodId } = useParams();
  const [prod, setProd] = useState([]);
  const [total, setTotal] = useState("");
  const [qtyBought, setQty] = useState("");
  const [confirm, setConfirm] = useState(false);
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
    setConfirm(true);
    if (qty < 0)
      Swal.fire({
        title: "Oopps!",
        text: "You cannot buy more than the stocks available!",
        icon: "error",
      });
    else {
      // add(prod.prodname, qty, prod.price);
      console.log(qtyBought);
      const total = data.get("quantity") * prod.price;
      const formatTotal = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(total);
      console.log(formatTotal);
      setTotal(formatTotal);
      // console.log(total);

      //theState does not store information to show in alert as fast as I want
      // setTimeout(function () {
      //   myalert(data.get("quantity"), formatTotal);
      // }, 1000);

      // setRefresh(true);
      // setTimeout(function () {
      //   navigate("/products");
      // }, 8000);
      // setRefresh(false)
      //   return refresh;
    }
  };

  const handleClick = () => {
    const toBuy = document.getElementById("quantity").value;
    console.log(toBuy);
    const qty = prod.quantity - toBuy
    if (qty < 0)
      Swal.fire({
        title: "Oopps!",
        text: "You cannot buy more than the stocks available!",
        icon: "error",
      });
    else {
      const updateQty = prod.quantity - toBuy
      add(prod.prodname, updateQty, prod.price);
      const total = toBuy * prod.price;
      const formatTotal = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(total);
      //theState does not store information to show in alert as fast as I want
      // setTimeout(function () {
      //   myalert(toBuy, formatTotal);
      // }, 1000);
      myalert(toBuy, formatTotal);

      setRefresh(true);
      setTimeout(function () {
        navigate("/products");
      }, 4000);
      setRefresh(false)
      return refresh;
    };
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
              autoFocus="false"
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
                inputProps={{ min: 0, max: 10 }}
                // defaultValue={prod.quantity}
                placeholder={`${prod.quantity}`}
                InputLabelProps={{
                  shrink: true,
                }}
                id="quantity"
               
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
                type="number"
                inputProps={{ min: 0, max: 5000, step :0.01 }}
                InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>, }}
                value={prod.price}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus="false"
              />
            </Grid>
            <Grid item xs={4}>
              <Button type="submit" variant="contained">
                Compute the total amount
              </Button>
            </Grid>
            <Grid item xs={7}>
              <div>
                {confirm ? (
                  <Box
                    component="div"
                    sx={{ pl: 3, color: "primary.main", fontSize: 20 }}
                  >
                    You are buying this product at a total price of : {total}.
                  </Box>
                ) : null}
              </div>
            </Grid>
          </Grid>
          <Button
            variant="outlined"
            sx={{ mt: 9, mb: 2 }}
            onClick={() => {
              handleClick();
            }}
          >
            Yes I am going to buy
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default BuyProductAlert;
