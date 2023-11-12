import React from 'react'
import style from './Profile.module.css'
import mypic from '../asset/images/shark.jpg'

function Profile() {
  return (
    <>
        <div className={style.profile}>
            <header>
                <h2>My Profile</h2>
            </header>

            <main>
                <section className={style.firstSec}>
                    <img src={mypic} alt='' />
                </section>
                <section className={style.secSec}>
                    <div className={style.desc}>
                        <div>
                            <h1>Debbie A. George</h1>
                            <hr />
                            <div className={style.details}>
                                <div>
                                    <p>Company</p>
                                    <h5>TechGenius</h5>
                                </div>
                                <div>
                                    <p>Email Address</p>
                                    <h5>debbie@gmail.com</h5>
                                </div>
                                <div>
                                    <p>Office Address</p>
                                    <h5>Abuja Obanikoro.....</h5>
                                </div>
                                <div>
                                    <p>Phone number</p>
                                    <h5>+234810294824994</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className={style.cred}>
                        <div>
                            <h3>Credentials Submitted</h3>
                            <div>
                                <p>National Identity Card</p>
                                <button type='button'>View</button>
                            </div>
                            <hr />
                            <div>
                                <p>National Identity Card</p>
                                <button type='button'>View</button>
                            </div>
                            <hr />
                        </div>
                    </section>
                </section>
            </main>
        </div>
    </>
  )
}

export default Profile