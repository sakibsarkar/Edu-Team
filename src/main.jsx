import "./index.css";
import AssignmentDetails from "./Pages/AssignmentDetails/AssignmentDetails";
import Assignments from "./Pages/Assignments/Assignments";
import AuthProvider from "./AuthProvider/AuthProvider";
import CreateAssignment from "./Pages/CreateAssignment/CreateAssignment";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login/Login";
import MyAssignments from "./Pages/MyAssignments/MyAssignments";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./Pages/Register/Register";
import SubmittedAssignments from "./Pages/SubmittedAssignments/SubmittedAssignments";
import UpdateAssignment from "./Pages/UpdateAssignment/UpdateAssignment";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>
      },
      {
        path: "/myAssignments",
        element: <PrivateRoute> <MyAssignments></MyAssignments></PrivateRoute>
      },
      {
        path: "/assignment/details/:id",
        element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>
      },
      {
        path: "/subAssignments",
        element: <PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>
      },
      {
        path: "/assignment/update/:id",
        loader: (e) => fetch(`https://assignment-11-server-eosin-alpha.vercel.app/api/assignment/${e.params.id}`, { credentials: "include" }),
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>
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


