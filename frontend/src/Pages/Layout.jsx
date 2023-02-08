import React from "react";
import Navbar from "../Components/Navbar";
import { Container, Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

const Layout = () => {
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
      <Navbar />
      <div>
        <Outlet />
      </div>
    </Box>
  );
};

export default Layout;
