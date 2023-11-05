import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import CreateAssignment from "./Pages/CreateAssignment/CreateAssignment";
import Home from "./Pages/Home/Home";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./Pages/Register/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Register></Register>
      },
      {
        path: "/createAssignments",
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
)
