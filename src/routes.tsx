import App from ".";
import { createBrowserRouter } from "react-router-dom";
import Shop from "./views/Shop";
import Contact from "./views/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
