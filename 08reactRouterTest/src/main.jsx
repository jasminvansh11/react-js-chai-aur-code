import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Github, { gitInfoLoader } from './components/Github/Github.jsx'
import User from './components/user/User.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home/>}></Route>
       <Route path="about" element={<About/>}></Route>
       <Route path="contact" element={<Contact/>}></Route>
       <Route 
       path="github" 
       loader={gitInfoLoader} 
       element={<Github/>}></Route>
       <Route path="user/:userid" element={<User/>}></Route>
    </Route>
     
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
