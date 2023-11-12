import React, { useState } from 'react'
import style from './Document.module.css';
import DocList from './DocList';
import { Docs } from './DocList';
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'
import UserPopUp from "../dashboard/UserPopUp"
import docImage from "../asset/images/FolderNotch.png"

function Document() {

  const [showPop, setShowPop] = useState(false)
  const [action, setAction] = useState(false)
  const [ind, setInd] = useState()
  const [file, setFile] = useState()
  const [value, setValue] = useState()
  const [fullname, setFullName] = useState("")
  const [depart, setDepart] = useState("")


  const [updated, setUpdated] = useState(DocList)
  const clicked = () =>{
    setShowPop(!showPop)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const date = new Date()
    const year = date.getFullYear()
    const monthName = date.toLocaleString("default",{
      month: "long",
    })
    const month = monthName.slice(0, 3)
    const day = date.getDay()
    const together = [month, day, year].join(" ")
    const update = {
      name: file,
      sharing: depart,
      modif: together,
      link: value,
      sentby: fullname
    }
    setUpdated([...updated, update])
    setShowPop(!showPop)
    console.log(value)
  }

  const inputRef = React.useRef(null);
  
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0].name);
      // setValue(e.target.files[0].value);
      setValue(e.target.files[0]);
    }
  };
  
  const showAction = (e) =>{
    setInd(e)
    setAction(!action)
  }
  return (
    <>
        <div className={style.docs}>
          <div className={style.header}>
            <header>
              <h2>My Document</h2>
            </header>
          </div>
          <main className={style.main}>
            <div className={style.gtsWrap}>
              <div className={style.gts}>
                <div>
                  <h3>Getting Started</h3>
                </div>
                <section className={style.started}>
                  {
                    Docs ? Docs.map((doc, index)=>(
                      <div key={index} className={style.aWrap}>
                        <div className={style.fWrap}>
                          <img src={doc.image} alt='' />
                          <i><BsThreeDots /></i>
                        </div>
                        <a href={doc.link} target='blank' className={style.fName}>{doc.name}</a>
                        <div className={style.deets}>
                          <p>Pdf</p>
                          <p>{doc.date}</p>
                        </div>
                    </div>
                    )) :""
                  }
                </section>
              </div>
            </div>
            <section className={style.fcWr}>
              <div className={style.gtsW}>
                <div className={style.foldWrap}>
                  <h3>Files Folder</h3>
                  <button type='btn' onClick={clicked}>Upload Document</button>
                </div>
              </div>
              <div className={style.gtsWr}>
                <div>
                  <aside className={style.layout}>
                    <p>S/N</p>
                    <p>Name</p>
                    <p>Sharing</p>
                    <p>Modified</p>
                    <p>Actions</p>
                  </aside>
                </div>
              </div>
              <div className={style.folWrap}>
                  <aside>
                    {
                      updated ? 
                      updated.map((doc, index)=>(
                        <div key={index} className={style.fALink}>
                          <div className={style.index}>{index + 1}</div>
                          <a href={doc.link} target='blank'>
                            <img src={docImage} alt='' />
                            <p>{doc.name}</p>
                          </a>
                          <div className={style.share}><p>{doc.sharing}</p></div>
                          <div className={style.mod}><p>{doc.modif}</p></div>
                          <div className={style.act} onClick={(e) =>showAction(index)}><i><BsThreeDotsVertical /></i></div>
                          {
                            action && ind === index ?
                          <UserPopUp trigger={action}>
                            <div className={style.letm}>
                              <div className={style.actPop}>
                                <div className={style.actBar}>
                                    <button type='btn'>Send</button>
                                    <button type='btn'>Delete</button>
                                </div>
                              </div>
                            </div>
                          </UserPopUp>
                          : ""
                        }
                        </div>
                      )) : ""
                    }
                  </aside>
                </div>
            </section>

          </main>
          <UserPopUp trigger={showPop}>
            <section className={style.popUpload}>
              <div>
                <h3>Upload Document</h3>
              </div>
              <div>
                <form action="" onSubmit={handleSubmit}>
                  <div className={style.form}>
                    <label>Full Name</label>
                    <div>
                      <input type='text' 
                      placeholder='John Doe' className={style.input}
                      value={fullname} 
                      required 
                      onChange={(e) => setFullName(e.target.value)}/>
                    </div>
                    <label>Department</label>
                    <div>
                      <input type='text' 
                      placeholder='Human Resources' className={style.input}
                      value={depart} 
                      required 
                      onChange={(e) => setDepart(e.target.value)}/>
                    </div>
                    <label>Upload File</label>
                    <div className={style.div}>
                      <input type='file' id={style.inputFileUpload} className={style.filInput} ref={inputRef} multiple={true} onChange={handleChange}/>
                      <label htmlFor={style.inputFileUpload} className={style.labelInput}>
                        <section>
                          <p>Upload file</p>
                          {
                            file ? 
                            <p>{file}</p>
                              :
                            <p>No File Choosen</p>                            
                          }
                        </section>
                      </label>
                    </div>
                    <aside className={style.btn}>
                      <button type='btn' className={style.cancel}>Cancel</button>
                      <button type='submit'>Upload</button>
                    </aside>
                  </div>
                </form>
              </div>
            </section>

          </UserPopUp>
        </div>
    </>
  )
}

export default Document