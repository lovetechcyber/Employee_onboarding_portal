import React, { useState } from 'react'
import style from './AccountType.module.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

function AccountType() {
    const [employee, setEmployee] = useState(false);
    const [hrOfficer, setHrOfficer] = useState(false);
  
    const navigate = useNavigate();

    const doEmploy =  (e) => {
    setEmployee(true);
    // setTimeout
    
    setTimeout(()=>{
        navigate("/personnel")
    }, 400)
}
    const goHr =  (e) => {
    setHrOfficer(true);
    
    setTimeout(()=>{
        navigate("/hr")
    }, 400)
}
    return (
        <>
        <div className={style.container}>
            <header className={style.header}>
                {/* <a href="./"><img src={logo} alt="logo" /></a> */}
            </header>
            <div className={style.formSections}>
                <h2 className={style.heading}>Choose account type</h2>
                <form action="" className={style.accountTypeForm}>
                    <div 
                    // to="/personnel"
                    onClick={doEmploy}
                    >
                      <p>Personnel</p><span><AiFillCheckCircle 
                        style={{
                            display: employee ? 'flex' : 'none',
                            color: employee ? '#FFFFFF)' : '',
                        }}
                        /></span>
                    </div>
                    <div 
                    onClick={goHr}
                    >
                        <p>HR Officer</p>
                    <span><AiFillCheckCircle 
                    style={{
                        display: hrOfficer ? 'block' : 'none',
                        color: hrOfficer ? '#FFFFFF' : '',
                    }} />
                    </span>
                  </div>
                </form>
            </div>
          </div>      
        </>
    )
}

export default AccountType