import App from ".";
import { createBrowserRouter } from "react-router-dom";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import ErrorPage from "./views/Error-page";

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
]);

export default router;
