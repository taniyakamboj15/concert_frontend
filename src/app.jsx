import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./components/Applayout";
import Main from "./pages/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

const app = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

root.render(<RouterProvider router={app} />);
