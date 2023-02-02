import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import errorPage from "./Pages/errorPage";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/items",
            element: <Products />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "*",
            element: <errorPage />,
          },
        ])}
      />
    </div>
  );
}

export default App;
