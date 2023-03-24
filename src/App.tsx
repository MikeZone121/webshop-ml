import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <Header />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Footer />
  </React.StrictMode>
);
