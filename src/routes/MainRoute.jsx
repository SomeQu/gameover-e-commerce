import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import MainPage from '../pages/MainPage'
import StorePage from '../pages/StorePage'
import CommunityPage from '../pages/CommunityPage'
import AboutPage from '../pages/AboutPage'
import SupportPage from '../pages/SupportPage'
import LoginPage from '../pages/authorization/LoginPage'
import RegistrationPage from '../pages/authorization/RegistrationPage'
import AddGame from '../pages/AddGame'
import CartPage from '../pages/CartPage'


const MainRoute = () => {
  return (
    <Routes>
        <Route element={<MainLayout />} >
            <Route path='/' element={<MainPage/>}/>
            <Route path='/store' element={<StorePage/>} />
            <Route path='/community' element={<CommunityPage/>}/>
            <Route path='about' element={<AboutPage/>} />
            <Route path='/support' element={<SupportPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/registration' element={<RegistrationPage/>} />
        <Route path='/add' element={<AddGame/>} />
        <Route path='/cart' element={<CartPage/>} />
        </Route>
    </Routes>
  )
}

export default MainRoute