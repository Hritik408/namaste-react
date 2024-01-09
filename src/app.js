import React, {lazy, Suspense} from "react"; 
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Home from "./components/Home";
import RestaurantMenu from "./components/restaurantMenu";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";  


  const Grocery = lazy(() => import("./components/Grocery"));  // lazy fun is used to import grocery

const AppLayout = ()=>{
  return( <div className="app">
    <Header/>
    <Outlet />  {/** path of children change -> outlet filled with children element  */} 
  </div>)
}

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [{
        path: "/",
        element: <Body />
      },{
        path: "/about", 
        element: <About />,
        },{
          path: "/home",
          element: <Home />
        },{
          path: "/contact",
          element: <Contact />
        },{
          path: "/grocery",
         element: <Suspense fallback={<h1>Loading....</h1>}> <Grocery /> </Suspense> 
        }, {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />
        }],
        errorElement: <Error />
    },
  ])

  const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRoute} />)
