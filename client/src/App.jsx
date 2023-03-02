import { useState } from "react";
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
import BeccaAndrew from "./pages/Galleries-page/BeccaAndrew";
import TheresaJamil from "./pages/Galleries-page/TheresaJamil";
import MeganJake from "./pages/Galleries-page/MeganJake";
import HannahCarson from "./pages/Galleries-page/HannahCarson";
import KayleenTristan from "./pages/Galleries-page/KayleenTristan";
import NinaZach from "./pages/Galleries-page/NinaZach";
import JessJordan from "./pages/Galleries-page/JessJordan";

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
        { path: "/gallery/BeccaAndrew", element: <BeccaAndrew /> },
        { path: "/gallery/TheresaJamil", element: <TheresaJamil /> },
        { path: "/gallery/MeganJake", element: <MeganJake /> },
        { path: "/gallery/HannahCarson", element: <HannahCarson /> },
        { path: "/gallery/KayleenTristan", element: <KayleenTristan /> },
        { path: "/gallery/NinaZach", element: <NinaZach /> },
        { path: "/gallery/JessJordan", element: <JessJordan /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
