import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {
  const [isActive, setIsActive] = useState(true)

  return (
    <>
    <Router>
    <Navbar isActive={isActive} setIsActive={setIsActive} />
      <Routes>
        <Route exact path='/' element={<Home isActive={isActive} setIsActive={setIsActive} />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
