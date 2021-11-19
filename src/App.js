import "./App.css";
import Home from "./components/Home";
import { Routes, Route  } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct"
import Product from "./components/Product";

function App() {
  // const [token, setToken] = useState('')
  // const queryClient = useQueryClient();
  // import { useQueryClient } from "react-query";
  // const login = async (username, password) => {
  //   const response = await fetch("https://snackshop589.herokuapp.com/api/token/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //     }),
  //   });

  //   const data = await response.json();
  //   console.log(data)
  //   setToken(data.access);
  // };

  // const addTodo = async () => {
  //   const body = JSON.stringify({
  //     subject: "Another", details: "New todo"
  //   });

  //   await fetch("https://snackshop589.herokuapp.com/todos/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": "Bearer " + token
  //     },
  //     body,
  //   });
  // }

  return (
    <div className="App">
     <Navbar/>
      {/* <button onClick={() => login("admin", process.env.REACT_APP_NOT_SECRET_CODE)}>Login</button> */}
      <Routes>
     <Route path ="home" element = {<Home/>} />
     <Route path="login" element={<Login />} />
     <Route path="products" element={<Products />}>
      <Route path=":prodId" element={<Product />} />
      </Route>
     <Route path= "addproduct" element = {<AddProduct/>}/>
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
