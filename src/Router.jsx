import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import "./index.css";
import React from "react";
import Home from "./Home";
import Details from "./Details";


 function Router() {
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/Details/:id",
        element: <Details/>,
    },
    ]);
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default Router