import React, { useState } from 'react'
import style from './AccountType.module.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function AccountType() {
    const [employee, setEmployee] = useState(false);
    const [hrOfficer, setHrOfficer] = useState(false);
  
    return (
        <>
        <div className={style.container}>
            <header className={style.header}>
                {/* <a href="./"><img src={logo} alt="logo" /></a> */}
            </header>
            <div className={style.formSections}>
                <h2 className={style.heading}>Choose account type</h2>
                <form action="" className={style.accountTypeForm}>
                    <Link to="/personnel"
                    onClick={ (e) => 
                        {
                        setEmployee(true);
                    } }
                    >
                        Personnel <span><AiFillCheckCircle 
                        style={{
                            display: employee ? 'block' : 'none',
                            color: employee ? 'rgb(27, 93, 27)' : '',
                        }}
                        /></span>
                    </Link>
                    <Link to="/hr" 
                    onClick={ () => 
                      {
                      // e.preventDefault();
                      setHrOfficer(true);
                    } }
                    >
                        HR Officer
                    <span><AiFillCheckCircle 
                    style={{
                        display: hrOfficer ? 'block' : 'none',
                        color: hrOfficer ? 'rgb(27, 93, 27)' : '',
                    }} />
                    </span>
                  </Link>
                </form>
            </div>
          </div>      
        </>
    )
}

export default AccountType