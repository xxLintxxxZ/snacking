import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import ProductEdit from "./components/ProductEdit";
import BuyProduct from "./components/BuyProduct";
import AddProduct from "./components/AddProduct";
// require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />} />
        {/* Remove nested route first nested the UI will be nested too. */}
        <Route path="products/:prodId" element={<ProductEdit />} />
        <Route path="products/buy/:prodId" element={<BuyProduct />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="signup" element={<SignUp />} />
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
