import React, { useState } from 'react'
import style from './Notification.module.css';
import List from './notifList';


function Notification(props) {

    const [notif ] = useState(List)
    // const { get } = props

    // get(true)



  return (
    <>
        <div className={style.notif}>
            <header>
                <h2 >Notification</h2>
            </header>
            <main>
                {
                    notif ? 
                    notif.map((list, index) =>(
                        <div key={index}>
                            <div className={style.notifMain} >
                                <div className={style.titl}>
                                    <h3>{list.title}</h3>
                                    <p className={style.date}>{list.date}</p>
                                    <p className={style.time}>{list.time}</p>
                                </div>
                                <div>
                                    <p className={style.sum}>{list.summary}</p>
                                </div>
                            </div>
                        </div>
                    )): ""
                }

            </main>
        </div>
    </>
  )
}

export default Notification