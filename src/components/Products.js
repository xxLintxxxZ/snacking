
// import { useQuery, useQueryClient } from "react-query";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
    const [prod, setProd] = useState([]);
  
    // const queryClient = useQueryClient();
    // const { status, data } = useQuery("prod", fetchTodo);
  
    // https://snackshop589.herokuapp.com/products/
  
    useEffect(() => {
      const fetchTodo = async () => {
        const response = await fetch("http://localhost:8000/products/");
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
      <ul>
        {prod.map(item => (
          <li key={item.id}>  <Link to= {`/product/${item.prodname}`}> Name: {item.prodname} </Link>
            <br />
            Quantity : {item.quantity}<br/>
            Price : {item.price}
           </li>
        ))}
      </ul>
    );
  }
  
  export default Products;
  