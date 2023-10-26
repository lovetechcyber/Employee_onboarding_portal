import { useState } from 'react'
import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Team from './Pages/Team'
import Documents from './Pages/Documents'
import Announcements from './Pages/Announcements'
import Reports from './Pages/Reports'
import Timekeeping from './Pages/Timekeeping'
import Signout from './Pages/Signout'


function App() {
  return (
    <>
    <Router>
      <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/team' element={<Team />} />
        <Route path='/documents' element={<Documents />} />
        <Route path='/announcements' element={<Announcements />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/timekeeping' element={<Timekeeping />} />
        <Route path='/signout' element={<Signout />} />
      </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
