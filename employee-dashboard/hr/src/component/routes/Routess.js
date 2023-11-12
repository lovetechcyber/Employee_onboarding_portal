import React, { useState } from 'react'
import EmployeeSignIn from '../userLogin/signIn/EmployeeSignIn'
import AccountType from '../userLogin/accountType/AccountType';
import { Routes, Route } from "react-router-dom";
import Dashboard from '../dashboard/Dashboard';
import Main from '../main/Main';
import Profile from '../profile/Profile';
import Team from '../theTeam/Team';
import Document from '../document/Document';
import ComingSoon from '../comingSoon/ComingSoon';
import Task from '../comingSoon/Task';
import Training from '../comingSoon/Training';
import Leave from '../comingSoon/Leave';
import Goals from '../comingSoon/Goals';
import PaySlip from '../comingSoon/PaySlip';
import TimeSheet from '../comingSoon/TImeSheet';
import Notification from '../notification/Notification';
import Message from '../message/Message';

function Routess({note}) {

  const [ navBar, setNavBar ] = useState()
  const [ navBack, setNavBack ] = useState()
  const [newNotf, setNewNotif] = useState()

  const handleNav = (data)=>{
    setNavBar(data)  
    setNavBack(data)  
  }
  const newNotif = (data) =>{
    setNewNotif(data)
  }
  if(note === false){
    setNewNotif(note)
  }

  return (
    <>
        <Routes>
            <Route path="/" element={<AccountType /> } />
            <Route path="/personnel" element={ <EmployeeSignIn />} />
            <Route path="/hr" element={ <EmployeeSignIn />} />

          


          {/* {after login} */}
            <Route  path="/dashboard" element={<Main props={navBar} pageLocation={<Dashboard  sendNavBar={handleNav}/>}/>} />
            <Route  path="/team" element={<Main prop={navBack} pageLocation={<Team  sendData={handleNav}/>}/>} />
            <Route  path="/document" element={<Main pageLocation={<Document />}/>} />
            <Route  path="/task" element={<Main pageLocation={<Task />}/>} />
            <Route  path="/training" element={<Main pageLocation={<Training />}/>} />
            <Route  path="/message" element={<Main pageLocation={<Message />}/>} />
            <Route  path="/notification" element={<Main not={newNotf} pageLocation={<Notification get={newNotif}/>}/>} />
            <Route  path="/myleave" element={<Main pageLocation={<Leave />}/>} />
            <Route  path="/mygoals" element={<Main pageLocation={<Goals />}/>} />
            <Route  path="/payslips" element={<Main pageLocation={<PaySlip />}/>} />
            <Route  path="/timesheet" element={<Main pageLocation={<TimeSheet />}/>} />
            <Route  path="/settings" element={<Main pageLocation={<ComingSoon />}/>} />
            <Route  path="/dashboard/profile" element={<Main props={navBar} pageLocation={<Profile sendNavBar={handleNav}/>}/>} />


           

        </Routes>

    </>
  )
}

export default Routess