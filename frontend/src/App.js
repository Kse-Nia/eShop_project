import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
require("dotenv").config();

function App() {
  return (
    <ChakraProvider>
      <h1>Hello</h1>
    </ChakraProvider>
  );
}

export default App;
