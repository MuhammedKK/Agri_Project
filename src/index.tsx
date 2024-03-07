import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Subscription from "./modules/subscription/Subscription";
import Signin from "./modules/signin/Signin";
import Signup from "./modules/signup/Signup";
import Dashboard from "./modules/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ForgetPassword from "./modules/forgetpassword/ForgetPassword";
import CheckMail from "./modules/forgetpassword/CheckMail";
import Loader from "./utils/Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/subscription",
    element: <Subscription />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/forgetPassword",
    element: <ForgetPassword />,
  },
  {
    path: "/checkMail",
    element: <CheckMail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Loader />
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Provider>
  </React.StrictMode>
);
