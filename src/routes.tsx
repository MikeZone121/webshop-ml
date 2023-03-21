import App from ".";
import { createBrowserRouter } from "react-router-dom";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import Cart from "./views/Cart";
import ErrorPage from "./views/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;
