import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Covarage from "../Pages/Covarage/Covarage";


export const Root = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h1>404 Page not Fount</h1>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'covarage',
        Component: Covarage,
        loader: () => fetch('/services-center.json').then(res=>res.json()),
        hydrateFallbackElement: <h1>Loading....</h1>
      }
    ]
  },
]);