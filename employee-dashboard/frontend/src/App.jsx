import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Feed from './Pages/Feed'
import People from './Pages/People'
import Team from './Pages/Team'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/people' element={<People />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
