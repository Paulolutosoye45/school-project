//react-router-dom
import { createBrowserRouter,RouterProvider } from "react-router-dom"
//componets
import Main from "./Layouts/Main"
import Home from "./comp/Home"
import Courses from "./page/Courses"
import Login from "./page/Login"
import Sign_up from "./page/Sign_up"
import Teacher from "./page/Teacher"
import View from "./page/View"
import WhyUs from "./page/WhyUs"
import Abouts from "./page/Abouts"
import Tables from "./Layouts/Tables"

const routes=createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/about',
        element:<Abouts/>
      },
      {
        path:'/Courses',
        element:<Courses/>
      },
      {
        path:'/teacher',
        element:<Teacher/>
      },
      {
        path:'/View',
        element:<View/>
      },
      {
        path:'/whyUs',
        element:<WhyUs/>
      },
    ],
  },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/sign_up',
      element:<Sign_up/>
    },
    {
      path:'/detail',
      element:<Tables/>
    },
  
])
function App() {
  
  
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
