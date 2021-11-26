import "./App.css";
// import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import ProductEdit from "./components/ProductEdit";
import BuyProductAlert from "./components/BuyProdAlert";
import AddProduct from "./components/AddProduct";
// require("dotenv").config();
import NavBar2 from "./components/Navbar2";
import Home2 from "./components/Home2";
// import { useState } from 'react';
import ProductsBuy from "./components/ProductsBuy";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { testAtom } from "./components/Login";
import ProductsAdmin from "./components/ProductsAdmin";
import ProductsPub from "./components/ProductsPub";
import NavBarPte from "./components/NavbarPte";


function App() {
  const [isToken] = useAtom(testAtom);

  const token = sessionStorage.getItem("token");
  console.log(token);
  console.log(isToken);

  useEffect(() => {
    const getToken = () => {
      const tokenString = sessionStorage.getItem("token");
      console.log(tokenString);
    };

    getToken();
  });

  if (!token) {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <NavBar2 />
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="login" element={<Login />} />
          <Route path="productsPub" element={<ProductsPub />} />
          {/* Remove nested route first nested the UI will be nested too. */}
          <Route path="signup" element={<SignUp />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Please login!</p>
              </main>
            }
          ></Route>
        </Routes>
      </div>
    );
  }

  return (
    <div className="App">
      {/* <Navbar /> */}
      <NavBarPte />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="login" element={<Login />} />
        <Route path="productsAdmin" element={<ProductsAdmin/>} />
        <Route path="productsbuy" element={<ProductsBuy />} />
        {/* Remove nested route first nested the UI will be nested too. */}
        <Route path="productsAdmin/:prodId" element={<ProductEdit />} />
        <Route path="products/buy/:prodId" element={<BuyProductAlert />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="products" element={<Products />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="productsPub" element={<ProductsPub />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
