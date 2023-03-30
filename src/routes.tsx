import App from ".";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./views/Contact";
import Cart from "./views/Cart";
import ErrorPage from "./views/ErrorPage";
import ProductDetail from "./components/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
  },
]);

export default router;
