import { useParams } from "react-router-dom";

export default function Product() {

      const {prodId} = useParams();
      return <h2>Product: {prodId}</h2>;
      console.log({prodId})
    }