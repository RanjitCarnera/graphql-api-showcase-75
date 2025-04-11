
import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages
import Index from './pages/Index';
import GettingStarted from './pages/GettingStarted';
import Queries from './pages/Queries';
import Mutations from './pages/Mutations';
import Fragments from './pages/Fragments';
import Types from './pages/Types';
import Auth from './pages/Auth';
import CORS from './pages/CORS';
import Examples from './pages/Examples';
import SDKs from './pages/SDKs';
import NotFound from './pages/NotFound';
import Playground from './pages/Playground';
import People from './pages/People';
import Projects from './pages/Projects';
import Scenarios from './pages/Scenarios';

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />
  },
  {
    path: "/getting-started",
    element: <GettingStarted />
  },
  {
    path: "/queries",
    element: <Queries />
  },
  {
    path: "/mutations",
    element: <Mutations />
  },
  {
    path: "/fragments",
    element: <Fragments />
  },
  {
    path: "/types",
    element: <Types />
  },
  {
    path: "/auth",
    element: <Auth />
  },
  {
    path: "/cors",
    element: <CORS />
  },
  {
    path: "/examples",
    element: <Examples />
  },
  {
    path: "/sdks",
    element: <SDKs />
  },
  {
    path: "/playground",
    element: <Playground />
  },
  {
    path: "/people",
    element: <People />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/scenarios",
    element: <Scenarios />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
