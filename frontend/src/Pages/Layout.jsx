import React from "react";
import Navbar from "../Components/Navbar";
import { Container, Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <Container width="100vw" height="100vh" margin="0" padding="0">
      <Navbar />
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
