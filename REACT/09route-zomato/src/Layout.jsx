import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from './Components/Landing-page/Banner'
import Footer from './Components/Landing-page/Footer'

function Layout() {
  return (
    <>
    <Banner/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout