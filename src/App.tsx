import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import router from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
