import React from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import Employees from './components/Employees'
import Login from './components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/employees' element={<Employees/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
