import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'   
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourite from './pages/Favourite'
import {Toaster } from 'react-hot-toast'
import Footer from './components/Footer'



const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin');//to hide in nav bar we put admin in here

  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/movies' element={<Movies/>} />
      <Route path = '/movies/:id' element={<MovieDetails/>} />
      <Route path = '/movies/:id/:date' element={<SeatLayout/>} />
      <Route path = '/my-booking' element={<MyBookings/>} />
      <Route path = '/favourite' element={<Favourite/>} />
    </Routes>
    {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
