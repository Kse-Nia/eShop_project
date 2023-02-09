import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Components/Navbar";
import { Box } from "@chakra-ui/react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Products from "./Pages/Products";
import Basket from "./Pages/Basket";
import PrivateRoute from "./Util/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <Box
      bg="background-color: #E4E4E1;
    background-image: radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%);
      background-blend-mode: normal, multiply;"
      minWidth="100vw"
      minHeight="100vh"
      margin="0"
      padding={0}
    >
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
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
    </Box>
  );
}
export default App;
