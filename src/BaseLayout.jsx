import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default BaseLayout
