import React, { useRef } from 'react';
import style from './Dashboard.module.css';
import shark from '../asset/images/shark.jpg'
import { MdKeyboardArrowRight, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom';



function Dashboard(props) {

    const { sendNavBar } = props



    const bodyRef = useRef();
 

    const bodyScroll = () => {
      bodyRef.current.scrollTop >= 5 ?
      sendNavBar(true) :
       sendNavBar(false)

    }

    const checked = () =>{
        
    }
  return (
    <div className={style.dashboard} onLoad={checked}>
        <div className={style.dashboardWrapper}  
            ref={bodyRef} onScroll={bodyScroll}>
            <header>
                <div className={style.headSection}> 
                    <section>
                        <div className={style.headerDiv}>
                            <h1>Welcome Back Jack!</h1>
                        </div>
                    </section>
                </div>
            </header>
            <main>
                <div className={style.sectionWrapper}>
                    <div className={style.section}>
                        <div className={style.profile}>
                            <div></div>
                            <div className={style.profilePic}>
                                <img src={shark} alt='sha' />
                            </div>
                            <div>
                                <h4>Jack</h4>
                                <p>Marketing Executive</p>
                            </div>
                            <hr />
                            <div>
                                <h4>Employee ID</h4>
                                <p>123</p>
                                <h4>Department</h4>
                                <p>Marketing</p>
                                <h4>Office</h4>
                                <p>HQ</p>
                                <h4>Date Joined</h4>
                                <p>20 June 2021</p>
                                <h4>Email</h4>
                                <p>jack@gmail.com</p>
                                <h4>Manager</h4>
                                <img src={shark} alt='sha' />
                            </div>
                        </div>
                        <section className={style.secondSection}>
                            <div className={style.onboardWrapper}>
                                <Link to="/" className={style.onboard}>
                                    <img src={shark} alt='sha' />   
                                    <div>
                                        <h3>Onboarding</h3>
                                        <p>Check and complete your onboarding task</p>
                                    </div>
                                    <i><MdOutlineArrowForwardIos /></i>
                                </Link>
                            </div>
                            <section>
                                <div className={style.forms}>
                                    <Link to="/profile">
                                        <aside>
                                            <img src={shark} alt='sha' />
                                            <span>
                                                <h4>My Profile</h4>
                                                <i><MdKeyboardArrowRight /></i>
                                            </span>
                                            <p>take a look</p>
                                        </aside>
                                    </Link>
                                    <Link to="/myleave">
                                        <aside>
                                            <img src={shark} alt='sha' />
                                            <span>
                                                <h4>My Leave</h4>
                                                <i><MdKeyboardArrowRight /></i>
                                            </span>
                                            <p>take a look</p>
                                        </aside>
                                    </Link>
                                    <Link to="/timesheet">
                                        <aside>
                                            <img src={shark} alt='sha' />
                                            <span>
                                                <h4>Timesheets</h4>
                                                <i><MdKeyboardArrowRight /></i>
                                            </span>
                                            <p>take a look</p>
                                        </aside>
                                    </Link>
                                    <Link to="/mygoals">
                                        <aside>
                                            <img src={shark} alt='sha' />
                                            <span>
                                                <h4>My Goals</h4>
                                                <i><MdKeyboardArrowRight /></i>
                                            </span>
                                            <p>take a look</p>
                                        </aside>
                                    </Link>
                                    <Link to="/payslips">
                                        <aside>
                                            <img src={shark} alt='sha' />
                                            <span>
                                                <h4>My Payslips</h4>
                                                <i><MdKeyboardArrowRight /></i>
                                            </span>
                                            <p>take a look</p>
                                        </aside>
                                    </Link>
                                </div>
                            </section>
                        </section>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Dashboard