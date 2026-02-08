import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/AboutComponent/About"
import Campus from "./components/CampusComponent/Campus"
import Contact from "./components/ContactComponent/Contact"
import Landing from "./components/MainComponent/Landing"
import Program from "./components/ProgramsComponent/Program"
import Testimonial from "./components/TestimonialsComponent/Testimonial"
import Home from "./components/Home"



function App(){
  const router =  createBrowserRouter([
    {
    element:<Home/>,
    children:[
    {
      path:"/",
      element:<Landing/>
    },
    {
      path:"/program",
      element:<Program/>
    },
    {
      path:"/about",
      element:<About/>
    },
        {
      path:"/campus",
      element:<Campus/>
    },
    {
      path:"/testimonial",
      element:<Testimonial/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },

    

  ]
  }]
  )
  return (
    <RouterProvider router={router}/>
    
 

    
  )
}

export default App
                                