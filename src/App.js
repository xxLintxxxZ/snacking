import "./App.css";
import Home from "./components/Home";
import { Routes, Route  } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct"
import Product from "./components/Product";
import SignUp from "./components/SignUp";
// import EditProduct from "./components/EditProduct";
import BuyProduct from "./components/BuyProduct"
// import SignIn from "./components/Login2"

require('dotenv').config()

function App() {
 
  return (
    <div className="App">
     <Navbar/>
      {/* <button onClick={() => login("admin", process.env.REACT_APP_NOT_SECRET_CODE)}>Login</button> */}
      <Routes>
     <Route path ="/" element = {<Home/>} />
     <Route path="login" element={<Login/>} />
        <Route path="products" element={<Products />} />
         {/* Remove nested route first nested the UI will be nested too. */}
        <Route path="products/:prodId" element={<Product />} />
        <Route path="products/buy/:prodId" element={<BuyProduct />} />
        {/* <Route path="products/edit/:prodId" element={<EditProduct />} /> */}
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="signup" element={<SignUp />} />
     {/* <Route
     path="*"
     element={
       <main style={{ padding: "1rem" }}>
         <p>There's nothing here!</p>
       </main>
     }
   >
   </Route> */}
   </Routes>
    </div>
  );
}

export default App;
