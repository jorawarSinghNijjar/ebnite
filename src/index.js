import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import App from "./App.js";

import "./styles/App.scss";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      // {
      //   path: "blog",
      //   element: <Blog />,
      // },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path:"/*",
    element: <Navigate to="/" replace />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}></RouterProvider>);
