import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Leyout/Main'
import Home from './Routes/Home'
import Login from './Routes/Login'
import Register from './Routes/Register'
import AuthProvider from './Providers/AuthProvider'
import PrivetRouter from './Routes/PrivetRouter/PrivetRouter'
import Order from './Routes/Order'
import UserProfile from './Routes/UserProfile'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/order',
        element: <PrivetRouter><Order></Order></PrivetRouter>
      },
      {
        path : '/profile',
        element: <PrivetRouter><UserProfile></UserProfile></PrivetRouter>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
