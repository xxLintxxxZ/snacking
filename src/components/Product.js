import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";


export default function Product() {
  const { prodId } = useParams();
  const [prod, setProd] = useState([]);

  // const queryClient = useQueryClient();
  // const { status, data } = useQuery("prod", fetchTodo);

  // https://snackshop589.herokuapp.com/products/

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch("https://snackshop589.herokuapp.com/products/"+ prodId);
      const prod = await response.json();
      setProd(prod)
    };

    fetchTodo();
  })

  return (<div><h2>Product: {prodId}</h2>
       <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pl: 6,
        }}
      >
        <Stack
          sx={{ pt: 2 }}
          direction="row"
          spacing={2}
          justifyContent="left"
        >
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
                      Name : {prod.prodname}
                    </Typography>
                    <Typography >
                     Quantity {prod.quantity}
                    </Typography>
                    <Typography >
                      Price : {prod.price}
                    </Typography>
                  </CardContent>
        </Card>
        </Stack>
      </Box>
    </div>);
    }