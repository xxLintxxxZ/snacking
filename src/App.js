import "./App.css";
// import { useState } from "react"
import Todos from "./components/Todos";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
      <h1>Todos</h1>
      {/* <button onClick={() => login("admin", process.env.REACT_APP_NOT_SECRET_CODE)}>Login</button> */}
      <Todos />
      <Button variant="outlined" component={RouterLink} to="/login">
        Login
      </Button>
      {/* <Route
          exact
          path="/new"
          render={(routerProps) => <Form {...routerProps} posts={posts} />}
        /> */}
      {/* <button onClick={() => addTodo()}>Add</button> */}
    </div>
  );
}

export default App;
