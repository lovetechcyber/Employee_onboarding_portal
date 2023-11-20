import React, { useState, useRef } from 'react';
import style from './Dashboard.module.css';
import profile from '../asset/images/profile.jpg'
import { BiSolidDownArrow } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdKeyboardArrowRight, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom';
import UserPopUp from './UserPopUp';



function Dashboard(props) {

    const { sendNavBar } = props
    const [showProfile, setShowProfile] = useState(false)

    const showSidePop = () =>{
        setShowProfile(!showProfile)
    }

    const bodyRef = useRef();
 

    const bodyScroll = () => {
      bodyRef.current.scrollTop >= 5 ?
      sendNavBar(true) :
       sendNavBar(false)

    }


  return (
    <div className={style.dashboard}>
        <div className={style.dashboardWrapper}  
            ref={bodyRef} onScroll={bodyScroll}>
            <header>
                <div className={style.headSection}> 
                    <section>
                        <div className={style.headerDiv}>
                            <h1>Welcome Back Jack!</h1>
                        </div>
                        <aside onClick={showSidePop}>
                            {/* <img src={profile} alt='sha' /> */}
                            <i><BiSolidDownArrow /></i>

                            <UserPopUp trigger={showProfile}
                            >
                                <div className={style.propUp}>
                                    <div className={style.pops}>
                                        <Link to="/">
                                            <div><CgProfile /></div>
                                            <p>Profile</p>
                                        </Link>
                                        <Link to="/">
                                            <div><IoMdNotificationsOutline /></div>
                                            <p>Notification</p>
                                        </Link>
                                    </div>
                                </div>
                            </UserPopUp>
                        </aside>
                    </section>
                </div>
            </header>
            <main>
                <div className={style.sectionWrapper}>
                    <div className={style.section}>
                        <div className={style.profile}>
                            <div></div>
                            <div className={style.profilePic}>
                            <CgProfile size={50} />
                                {/* <img src={profile} alt='sha' /> */}
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
                                <img src={profile} alt='sha' />
                            </div>
                        </div>
                        <section className={style.secondSection}>
                            <div className={style.onboardWrapper}>
                                <Link to='/onboarding' className={style.onboard}>
                                    {/* <img src={profile} alt='sha' />    */}
                                        <CgProfile size={50} />
                                    <div>
                                        <h3>Onboarding</h3>
                                        <p>Check and complete your onboarding task</p>
                                    </div>
                                    <i><MdOutlineArrowForwardIos /></i>
                                </Link>
                            </div>
                            <section>
                                <div className={style.forms}>
                                    <Link to="/">
                                        <aside>
                                            {/* <img src={profile} alt='sha' /> */}
                                             <CgProfile size={50} />

                                            <span>
                                                <h4>My Profile</h4>
                                                <i><MdKeyboardArrowRight /></i>
                                            </span>
                                            <p>take a look</p>
                                        </aside>
                                    </Link>
                                    <Link to="/">
                                        <aside>
                                            {/* <img src={profile} alt='sha' /> */}
                                             <CgProfile size={50} />

                                            <span>
                                                <h4>Directory</h4>
                                                <i><MdKeyboardArrowRight /></i>
                                            </span>
                                            <p>take a look</p>
                                        </aside>
                                    </Link>
                                    <Link to="/">
                                        <aside>
                                            {/* <img src={profile} alt='sha' /> */}
                                             <CgProfile size={50} />

                                            <span>
                                                <h4>My Leave</h4>
                                                <i><MdKeyboardArrowRight /></i>
                                            </span>
                                            <p>take a look</p>
                                        </aside>
                                    </Link>
                                    <Link to="/">
                                        <aside>
                                            {/* <img src={profile} alt='sha' /> */}
                                             <CgProfile size={50} />

                                            <span>
                                                <h4>Timesheets</h4>
                                                <i><MdKeyboardArrowRight /></i>
                                            </span>
                                            <p>take a look</p>
                                        </aside>
                                    </Link>
                                    <Link to="/">
                                        <aside>
                                            {/* <img src={profile} alt='sha' /> */}
                                             <CgProfile size={50} />

                                            <span>
                                                <h4>My Goals</h4>
                                                <i><MdKeyboardArrowRight /></i>
                                            </span>
                                            <p>take a look</p>
                                        </aside>
                                    </Link>
                                    <Link to="/">
                                        <aside>
                                            {/* <img src={profile} alt='sha' /> */}
                                             <CgProfile size={50} />

                                            <span>
                                                <h4>My Payslips</h4>
                                                <i><MdKeyboardArrowRight /></i>
                                            </span>
                                            <p>take a look</p>
                                        </aside>
                                    </Link>
                                    <Link to="/">
                                        <aside>
                                            {/* <img src={profile} alt='sha' /> */}
                                             <CgProfile size={50} />

                                            <span>
                                                <h4>My Claims</h4>
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