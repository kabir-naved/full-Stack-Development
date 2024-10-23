import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'


const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout/>,   
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'*',
    element:<Notfound/>
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)