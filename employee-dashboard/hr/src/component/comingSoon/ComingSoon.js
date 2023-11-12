import React from 'react'
import style from './ComingSoon.module.css'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';



function ComingSoon() {

    const navigate = useNavigate()

    const clicked = () =>{
        navigate(-1)
    }
  return (
    <>
        <div className={style.pgWrapper}>
            <h1>Coming Soon</h1>
            <div onClick={clicked}>
                <i><BsArrowLeft /></i>
                <button type='btn'>Back</button>
            </div>
        </div>
    </>
  )
}

export default ComingSoon