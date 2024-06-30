import React, {lazy, Suspense, useEffect, useState} from "react"; 
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; 
import RestMenu from "./components/RestMenu"; 
import UserContext from "./utils/UserContext";

     
const Grocery = lazy(() => import("./components/Grocery"));  // lazy fun is used to import grocery


const AppLayout = ()=>{

  const[UserName, setUserName] = useState();
                               
  useEffect(()=>{
      const data = {
        name: ""
      };
       setUserName(data.name);                                    
  }, [])

  return(
    <UserContext.Provider value={{loggedInUser: UserName, setUserName}}>  {/* here provider help to provide the data inside to app over the components */}
     <div className="app">
    <Header/>
    <Outlet />  {/** path of children change -> outlet filled with children element  */} 
  </div>
  </UserContext.Provider>
  )
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
        },{
          path: "/rest/:restId",
          element: <RestMenu />
        }
      ],
        errorElement: <Error />
    },
  ])

  const root = ReactDOM.createRoot(document.getElementById("root"))

   root.render(<RouterProvider router={appRoute} />)
