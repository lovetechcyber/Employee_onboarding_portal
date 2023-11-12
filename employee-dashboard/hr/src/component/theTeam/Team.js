import React, { useState } from 'react';
import style from "./Team.module.css";
import { BsArrowLeft } from "react-icons/bs";
import UserPopUp from '../dashboard/UserPopUp';
import TeamList from './TeamList';

function Team(props) {


    const [showPop, setShowPop] = useState(false)
    const { sendData } = props
    const [clickedData, setData] = useState()






    const clicked = async (list) =>{
        setData(list)
        setShowPop(!showPop)
        sendData(!showPop)
    }

  return (
    <>

        <div className={
            showPop ? style.teamCh:
            style.team}>
            <div className={style.header}>
                <h1>All Team Members</h1>
                <p>Get to Know your team</p>
            </div>
            <section>
                <div className={style.cardWrapper}>
                {
                    TeamList ?
                    TeamList.map((list, index) =>(
                        <div className={style.card}
                        onClick={()=> clicked(list)}
                        key={index}>
                            <img src={list.image} alt='' />
                            <section>
                                <div>
                                    <div className={style.emply}>
                                        <h3>{list.name}</h3>
                                        <p className={style.p}>{list.job}</p>
                                    </div>
                                    <hr />
                                    <a href={`mailto:${list.email}`}>{list.email}</a>
                                    <p className={style.cardDate}>Start date</p>
                                    <p className={style.cardD}>{list.date}</p>
                                </div>
                            </section>
                        </div>
                    )
                    )
                    : ""
                }
                </div>
            </section>

        </div>
        <UserPopUp trigger={showPop}>
                {
                    clickedData ?
                    <main className={style.popMain}>
                        <div className={style.pop}>
                            <div>
                                <div className={style.move}>
                                    <div>
                                        <aside onClick={clicked}
                                        className={style.backspace}>
                                            <i><BsArrowLeft /></i>
                                            <p>All team member</p>
                                        </aside>
                                        <img src={clickedData.image} alt='' />
                                    </div>
                                </div>
                                <div  className={style.emplyee}>
                                    <h3>{clickedData.name}</h3>
                                    <h5>{clickedData.job}</h5>
                                </div>
                                <div  className={style.deets}>
                                    <aside>
                                        <h6>Start Date</h6>
                                        <p>{clickedData.date}</p>
                                    </aside>
                                    <aside>
                                        <h6>Email</h6>
                                        <a href={`mailto:${clickedData.email}`}>{clickedData.email}</a>
                                    </aside>
                                </div>
                                <div className={style.deets}>
                                    <aside>
                                        <h6>Favorite X-Men</h6>
                                        <p>{clickedData.date}</p>
                                    </aside>
                                    <aside>
                                        <h6>Onboarding</h6>
                                        <p>{clickedData.email}</p>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </main>
                    : ""
                }
        </UserPopUp>
    </>
  )
}

export default Team