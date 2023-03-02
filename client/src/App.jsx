import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/App.css";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Connect from "./pages/Connect";
import OliviaJohn from "./pages/Galleries-page/OliviaJohn";
import LizThomas from "./pages/Galleries-page/LizThomas";

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
        { path: "/gallery/OliviaJohn", element: <OliviaJohn /> },
        { path: "/gallery/LizThomas", element: <LizThomas /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
