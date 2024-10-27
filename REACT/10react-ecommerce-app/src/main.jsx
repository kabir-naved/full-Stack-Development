import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Banner from './Components/Banner.jsx'



const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Banner/>
        }
      ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)