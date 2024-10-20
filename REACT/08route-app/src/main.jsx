import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import NotFound from './Components/Not-found.jsx'
import Notfound from './Components/Not-found.jsx'
import Login from './Components/Login.jsx'
import Terms from './Components/Terms&Conditions.jsx'
import Privacy from './Components/Privacy-policy.jsx'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='*' element= {<Notfound/>}/>
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
      
     
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "privacy",
    element: <Privacy />
  },
  {
    path: "terms",
    element: <Terms />
  },
  {
    path: '*',
    element: <NotFound/>
  }
  
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
