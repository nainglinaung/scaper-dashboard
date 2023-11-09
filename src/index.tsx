import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Homepage';
import Login from './pages/Login'
import reportWebVitals from './reportWebVitals';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Single from './pages/Single';
import { AuthProvider } from './providers/Auth';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const AuthLayout = () => (
  <AuthProvider>
    <Outlet />
  </AuthProvider>
);

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children:[{
      path: "/",
      element: <Home />,
    },
    {
      path: "/page/:id",
      element: <Single />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: '/logout',
      element: <Logout />,
    }]
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
