import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import OpayScreen from "../Pages/OpayScreen";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <OpayScreen />,
      },
    ],
  },
]);
