import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Feed from './Pages/Feed'
import People from './Pages/People'
import Team from './Pages/Team'
import { BsChatDotsFill } from "react-icons/bs";


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
        <div className='fixed right-6 bottom-6'>
          <BsChatDotsFill size={40} />
        </div>
      </Router>
    </>
  )
}

export default App
