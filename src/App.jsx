import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Home from './Pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from './Components/Navbar'
import Browse from './Pages/Browse/Browse'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </>
  )
}

export default App
