import React, { useState } from 'react'
import Dashboard from '../Components/Dashboard'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Home = ({ isActive, setIsActive}) => {
    

  return (
    <>
    <div className='w-full flex'>
        <Sidebar isActive={isActive} setIsActive={setIsActive} />
        {/* <Dashboard /> */}
    </div>
    </>
  )
}

export default Home
