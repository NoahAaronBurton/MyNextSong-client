import 'bootstrap/dist/css/bootstrap.min.css';

import { GoogleOAuthProvider } from '@react-oauth/google';

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './error-page.jsx';

import Home from "./routes/home.jsx";
import Landing from "./routes/landing";
import Login from "./routes/login.jsx";

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
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:catchAll",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='272155549288-5m0eal6p2p7ufof91m71sb3ijcqkkasp.apps.googleusercontent.com'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>
)
