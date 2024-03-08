import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import "./app.css"
import RestaurentCard from "./components/RestaurentCard";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import "./index.css"
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
const Grocery = lazy(()=>import("./components/Grocery"))
const About = lazy(()=>import("./components/About"))
function App(){

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<RestaurentCard/>,
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurents/:resId",
        element:<RestaurentMenu/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      }
    ],
    errorElement:<Error/>
  },
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
