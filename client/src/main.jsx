import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import SignUp from './view/SignUp.jsx'
import Login from './view/Login.jsx'
import User from './view/User.jsx'
import Contribute from './view/Contribute.jsx'
import Transactions from './view/Transactions.jsx'
import Account from './view/Account.jsx'
import Balance from './view/Balance.jsx'
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
  },
  {
    element:<User/>,
    path:'/user'
  },
  {
    element:<Contribute/>,
    path:'/user/contribute'
  },
  {
    element:<Transactions/>,
    path:'/user/transactions'
  },
  {
    element:<Account/>,
    path:'/user/account'
  },
  {
    element:<Balance/>,
    path:'/user/account/balance'
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
