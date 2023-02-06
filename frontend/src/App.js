import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";

import Layout from "./Layout";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Products from "./Pages/Products";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "registration", element: <Register /> },
      { path: "/products", element: <Products /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
