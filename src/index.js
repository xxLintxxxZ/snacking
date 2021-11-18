import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct"
  
const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="products" element={<Products />} />
      <Route path= "addproduct" element = {<AddProduct/>}/>
      <Route path=":productName" element={<Product />} />
    </Routes>
    </BrowserRouter>,
    rootElement
 
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
