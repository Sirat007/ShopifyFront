import React from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const Mainlayout = ({numCartItems}) => {
  return (
    <>
      <Navbar numCartItems={numCartItems}/>
      <ToastContainer/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Mainlayout
