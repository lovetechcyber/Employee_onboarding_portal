import React, { useState, useRef, useEffect } from 'react'
import style from "./EmployeeSignIn.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { GoUnlock } from 'react-icons/go';



function EmployeeSignIn() {
  // const { updateUser } = useContext(UserContext)

  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();




  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState('');
  const [savePwd, setSavePwd] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])


const handleSubmit = async (e) =>{
  navigate("/dashboard")
  e.preventDefault();
  
  // const data = {
  //   email: email,
  //   password: password,
  // }

  // const url = ""

  // try{
  // await axios.post(url, data, {
  //   headers:{
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   }
  //  }).then((response) =>{
  //  if(response.status === 200){
   
   
    

  //   setEmail("");
  //   setPassword("");
  //   navigate('/dashboard')

  //  }

  //   handleChecked()
  //   if(savePwd === true){

  //   }


  //  })
  // }catch(error){
  //   if (!error?.status) {
  //     setErrMsg('No Server Response');
  // } else if (error?.status === 400) {
  //     setErrMsg('Missing Username or Password');
  // } else if (error?.status === 404) {
  //     setErrMsg('Unauthorized');
  // } else {
  //     setErrMsg('Login Failed');
  // }
  // errRef.current.focus();
  // }

}
const handleChecked = () =>{
  setSavePwd(!savePwd)

}

return (
    <>
    <div className={style.employMain}>

        <header className={style.header}>
          <div>
            {/* <Link to="/"><img src={logo} alt="logo" /></Link> */}
          </div>
        </header>

        <div className={style.formSection}>
            <div className={style.formSectionDiv}>
            <h2>Login</h2>
            <form className={style.regBox} onSubmit={handleSubmit}>
            <div className={style.boxPos}>
              <div>
                <p>Email</p>
                <div className={style.inputWrpapper}>
                  <i><AiOutlineUser /></i>
                  <input type="email" name='email' placeholder='JohnDol@example.com' 
                  value={email} required 
                  onChange={(e) => setEmail(e.target.value)}
                  ref={userRef}
                  autoComplete="on"
                  />
                </div>
              </div>
              <div>
                <p>Password</p>
                <div className={style.inputWrpapper}>
                  <i><GoUnlock /></i>
                  <input type="password" name='password'
                  value={password} 
                  required 
                  onChange={(e) => setPassword(e.target.value)}/>
                </div>
              </div>
            </div>
            <div className={style.fgPwdRPwsd} >

            <Link to="/forgotpassword">Forgotten password?</Link>

             <div className={style.checkbox}>
             <input type="checkbox" name='remember-password' checked={savePwd} onChange={handleChecked}/>
                <p>Remember me</p>
             </div>
            </div>
            <div className={style.btnWrapper}>
              <button className={style.btn} type="submit">LOGIN</button>
            </div>
            </form>
        </div>
        </div>
        <p ref={errRef} className={errMsg ? style.errmsg : style.offscreen} aria-live="assertive">{errMsg}</p>
    </div>
      
    </>
  )
}

export default EmployeeSignIn