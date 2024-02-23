import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import SignUp from './view/SignUp.jsx'
import Login from './view/Login.jsx'
const router =createBrowserRouter([
  {
    element:<App/>,
    path:'/'

  },
  {
    element:<SignUp/>,
    path:'/signup'
  },
  {
    element:<Login/>,
    path:'/login'
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
