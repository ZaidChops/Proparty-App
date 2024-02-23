import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <>
      <Router>
      <NavBar/>
      <div style={{marginTop:'100px', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
