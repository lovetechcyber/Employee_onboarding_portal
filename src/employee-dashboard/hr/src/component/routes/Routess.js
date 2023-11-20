import React, { useState } from 'react'
import EmployeeSignIn from '../userLogin/signIn/EmployeeSignIn'
import AccountType from '../userLogin/accountType/AccountType';
import { Routes, Route } from "react-router-dom";
import Dashboard from '../dashboard/Dashboard';
import Main from '../main/Main';
import Onboarding from '../onboarding/Onboarding';


function Routess() {

  const [ navBar, setNavBar ] = useState()
  const handleNav = (data)=>{
    setNavBar(data)  
  }


  return (
    <>
        <Routes>
            <Route path="/" element={<AccountType /> } />
            <Route path="/personnel" element={ <EmployeeSignIn />} />
            <Route path="/hr" element={ <EmployeeSignIn />} />

          


          {/* {after login} */}
            <Route path="/dashboard" element={<Main props={navBar} pageLocation={<Dashboard  sendNavBar={handleNav}/>}/>} />
            <Route path='/onboarding' element={<Onboarding />} />


           

        </Routes>

    </>
  )
}

export default Routess