import React, { useState } from 'react'
import SideBar from './sideBar/SideBar';
import style from './Main.module.css'
import { MdMenuOpen } from "react-icons/md";
import UserPopUp from '../dashboard/UserPopUp';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { BiSolidDownArrow } from 'react-icons/bi';
import shark from '../asset/images/shark.jpg';
import { GoDotFill } from 'react-icons/go';




function Main({pageLocation, prop, not, }, note) {

  const [showProfile, setShowProfile] = useState(false)
  const [toogle, setToogle] = useState()
  const { remNot } = note
  
  
  const handleData = (data) =>{
        setToogle(data)

    }

    const handleClick = () =>{
      setToogle(false)
    }
    
    const showSidePop = () =>{
      setShowProfile(!showProfile)
  }

  const checked = () =>{
    remNot(false)
  }

  return (
    <div className={style.mainBody}>
        <div className={
            toogle? style.toogleBar :
            style.sideBar}>
            <SideBar sendData={handleData}/>
        </div>
        <div className={style.main}>
          <div className={
            prop? style.scrollCh:
            style.scrolled}>
            <aside
                onClick={handleClick}
                className={style.sideMenu}
                >
                    <MdMenuOpen /></aside>
            <aside onClick={showSidePop} className={style.profile}>
                <img src={shark} alt='sha' />
                  {
                    not ? 
                      <i className={style.ic}><GoDotFill /></i>
                      : ""
                  }
                  <i className={style.ics}><BiSolidDownArrow /></i>
             <UserPopUp trigger={showProfile}>
               <div className={style.propUp}>
                  <div className={style.pops}>
                    <Link to="/dashboard/profile">
                      <div><CgProfile /></div>
                      <p>Profile</p>
                    </Link>
                    <Link to="/notification" onClick={checked}>
                      <div><IoMdNotificationsOutline />
                      {
                        not ?
                        <i className={style.top}><GoDotFill /></i>
                        : ""
                      }
                      </div>
                      <p>Notification</p>
                    </Link>
                  </div>
                </div>
              </UserPopUp>
            </aside>
          </div>
          {pageLocation}
    
        </div>
    </div>
  )
}

export default Main