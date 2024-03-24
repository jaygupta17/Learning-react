import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements } from "react-router-dom"
import Home from "./Components/Home"
import Layout from './Components/Layout'
import About from './Components/About'
import Contact from './Components/Contact'
import Github, { gitInfo } from './Components/Github'
import User from './Components/User'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route
       loader={gitInfo}
       path='github'
       element={<Github/>}
      />
      <Route path='user/' element={<User/>}>
        <Route path=':userId' element={<User/>}/>
      </Route>
      <Route path='*' element={<div>Page Not Found</div>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
