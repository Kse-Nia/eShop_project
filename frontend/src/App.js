import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Components/Navbar";
import { Box } from "@chakra-ui/react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Products from "./Pages/Products";
import Basket from "./Pages/Basket";
import PrivateRoute from "./Util/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute user={user} />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/mybasket" element={<Basket />} />
              <Route path="/userprofile" element={<Profile />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
