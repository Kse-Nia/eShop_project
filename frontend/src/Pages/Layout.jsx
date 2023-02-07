import React from "react";
import Navbar from "../Components/Navbar";
import { Container, Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

//bg="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"
const Layout = () => {
  return (
    <Box
      bg="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"
      minWidth="100vw"
      minHeight="100vh"
      margin="0"
      padding={0}
    >
      <Navbar />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
