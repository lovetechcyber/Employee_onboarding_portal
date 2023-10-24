import React, { useState } from 'react'
// import { Routes, Route } from "react-router-dom";
// import Dashboard from '../dashboard/Dashboard';
import SideBar from './sideBar/SideBar';
import style from './Main.module.css'
import { MdMenuOpen } from "react-icons/md";



function Main({pageLocation, props}) {


    const [toogle, setToogle] = useState()

    const handleData = (data) =>{
        setToogle(data)

    }

    const handleClick = () =>{
      setToogle(false)
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
            props ? style.scrolled :
            ""}>
            <aside
                onClick={handleClick}
                className={style.sideMenu}
                >
                    <MdMenuOpen /></aside>
          </div>
          {pageLocation}
    
        </div>
    </div>
  )
}

export default Main