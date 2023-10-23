import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

function App() {
  const [isActive, setIsActive] = useState(true)

  return (
    <>
    <Router>
      <Navbar isActive={isActive} setIsActive={setIsActive} />
      <Dashboard />
      {/* <div className='flex'> */}
        <Sidebar isActive={isActive} setIsActive={setIsActive} />
      {/* </div> */}
      <Routes>
        {/* <Route exact path='/' element={<Home isActive={isActive} setIsActive={setIsActive} />} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
