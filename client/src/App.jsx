import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/App.css";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Connect from "./pages/Connect";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/services", element: <Services /> },
        { path: "/connect", element: <Connect /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
