import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Aboutus from './components/aboutus/Aboutus'
import Home from './components/home/Home'
import Contact from './components/contactus/contactus'
import User from './components/User/User'
import Github from './components/Github/Github'

// const router=createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[{
//     path:"",
//     element:<Home/>
//   },
//   {
//     path:"about",
//     element:<Aboutus/>
//   },{
//     path:"Contact",
//     element:<Contact/>
//   }
//   ]
// }])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path='' element={<Home/>}></Route>
    <Route path='/about' element={<Aboutus/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/User/:Userid' element={<User/>}></Route>
    <Route path='/Github' element={<Github/>}></Route>
    
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
