import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Homepage';
import Login from './pages/Login'
import reportWebVitals from './reportWebVitals';
import Logout from './pages/Logout'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: '/logout',
    element: <Logout/>,
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
