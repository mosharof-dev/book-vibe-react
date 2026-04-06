import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/Layout/MainLayout";
import HomePage from "../Components/Home/HomePage";
import Books from "../Components/Pages/Books/Books";
import ErrorPage from "../Components/Pages/Error/ErrorPage";


export const router = createBrowserRouter([
  
  {
    path: "/",
    Component: MainLayout,
    children:[
      { index: true, Component: HomePage},
      { path: "/Books" , Component: Books }

    ],
    errorElement: <ErrorPage/>
  },

]);