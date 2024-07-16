import { useState } from 'react'

import './App.css'
import Navbar from './componenets/Home/Navbar'
import Hero from './componenets/Home/Hero'
import { Routes,Route } from 'react-router-dom'
import Home from './componenets/Home/Home'
import About from './componenets/About/About'


function App() {
 

  return (
    <>
     <div className='bg-gray-100'>

      <Navbar/>
     <Routes>
     
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
     </Routes>
     

     </div>
    </>
  )
}

export default App
