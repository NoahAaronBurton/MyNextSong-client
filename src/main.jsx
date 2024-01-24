import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './error-page.jsx';

import Home from "./routes/home.jsx";
import Landing from "./routes/landing";
import Signup from "./routes/signup.jsx";

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />, 
    errorElement: <ErrorPage />,
    
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:catchAll",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
