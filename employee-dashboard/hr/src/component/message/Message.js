import React, { useState } from 'react'
import style from './Message.module.css';
import { BiSolidLockAlt } from 'react-icons/bi';
import { GiCheckMark } from 'react-icons/gi';
import { IoMdSend } from 'react-icons/io';
import user from "../asset/images/shark.jpg";


function Message() {

    const [text, setText] = useState("")
    const [fill, setFill] = useState("")
    const [currentTime, setCurrentTime] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFill([...fill, text])
        setText("")

    const today = new Date()
    const hour = today.getHours()
    const minute = today.getMinutes()
    // const time = today.getTime()
    if(hour < 10 && minute < 10){
        setCurrentTime([...currentTime, `0${hour}:0${minute}`])
    }else if(hour < 10 && minute > 10){
        setCurrentTime([...currentTime, `0${hour}:${minute}`])
    }else if(hour > 10 && minute < 10){
        setCurrentTime([...currentTime, `${hour}:0${minute}`])
    }else{
        setCurrentTime([...currentTime, `${hour}:${minute}`])
    }
    // console.log(currentTime)
}

    const showChats = () =>{

    }
  return (
    <>
        <div className={style.mess}>
            <div className={style.chat}>
                <section>
                    <div className={style.header}>
                        <header>
                            <img src={user} alt='' />
                            <p>Name</p>
                        </header>
                    </div>
                    <main>
                        <div className={style.date}>
                            <p>Date</p>
                        </div>
                        <div className={style.warn}>
                            <p><BiSolidLockAlt />Messages are end-to-end encrypted. No one outside the chat can read it</p>
                        </div>
                        <div className={style.chatbox}>
                            <div className={style.replyChat}>
                                <div>
                                    <aside>Hey, jshhfhsfh<p>{currentTime}</p></aside>
                                </div>
                            </div>
                            {fill? fill.map((words, index) =>(
                            <div className={style.userChat}  key={index}>
                                <div className={style.userChats}>
                                    <div >{words}<p>{currentTime.map((times)=>(times))}</p>
                                    <i><GiCheckMark /></i>
                                    </div>
                                </div>
                            </div>
                                    ))
                                    : ""
                                    }
                        </div>
                        <form action='' onSubmit={handleSubmit}>
                            <section>
                                <div>
                                    <input type='text' value={text} onChange={(e) =>setText(e.target.value)}
                                    placeholder='Type a message'></input>
                                </div>
                                <button type='submit'><IoMdSend /></button>
                            </section>
                        </form>
                    </main>
                </section>
            </div>
            <div className={style.label}>
                <section className={style.lbHeader}>
                    <div>
                        <p>Name</p>
                        <img src={user} alt='' />
                    </div>
                </section>
                <section className={style.personnel}>
                    <div className={style.pBox} onClick={showChats}>
                        <div className={style.pWrap}>
                            <img src={user} alt='' />
                            <div>
                                <p>Names</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default Message