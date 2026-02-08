import React from 'react'
import Navbar from './navbarComponent/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer Component/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Home