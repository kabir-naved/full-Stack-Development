import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Collection from './Components/pages/Collection.jsx'
import Home from './Components/pages/Home.jsx'




const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout/>,
  },
  {
      path: '/home',
      element: <Home/>
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)