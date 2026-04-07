import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router/dom";

import { router } from "./Routes/Routes";
import './index.css'
import BookContext from "./Components/Context/BookProvider";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
<BookContext>
   <RouterProvider router={router} />
</BookContext>
  
  

  
);
