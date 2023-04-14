import React from 'react'
import ResponsiveAppBar from '../components/AppBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <Outlet/>

    </div>
  )
}

export default MainLayout