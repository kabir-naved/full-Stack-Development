import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/common/Navbar'
import Footer from './Components/common/Footer'
import Collection from './Components/pages/Collection'


function Layout() {
  return (
    <>
    <Navbar/>
    <Collection/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout