import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./services/products";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Provider>
  </React.StrictMode>
);
