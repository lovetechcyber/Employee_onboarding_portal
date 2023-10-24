import React from 'react'
import styles from './SideBar.module.css'
import { IoSettingsOutline } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import shark from '../../asset/images/shark.jpg'


function SideBar(props) {
    const { sendData } = props

    const handleLogout = async () => {
    
    //     let token = localStorage.getItem("token")
        // let email = localStorage.getItem("userEmail")
        // const email = user.userData.data.Email
        //   const data = {
        //     email: email,
        //   }
        //   const url = ""
        
        //   await axios.post(url, data, {
        //     headers:{
        //     "Authorization": "Bearer" + token,
        //     "Content-Type": "application/json",
        //     }
        //    }).then((response) =>{
         
        //     if(response.status === 200){
        //         localStorage.clear();
        //     // setEmail("");
        //     }
        //    }).then((error) =>{

        //    })     
        }   
        

        const handleClicked = () =>{
            sendData(true)        
        }

return(
    <>
        <div className={styles.sideBarWrapper}>
            <div className={styles.logo}>
                <section>
                    <aside>
                <i
                onClick={handleClicked}
                >
                    <AiOutlineClose /></i>
                </aside>
                <div>
                    <img src={shark} alt="Logo" />
                </div>
                </section>
            </div>
            <div className={styles.navLinkWrapper}>
                <div className={styles.navLink}>
                    <div className={styles.firstSectionLink} >
                        <li>
                            <NavLink to="/"
                            className={({isActive, isPending}) => isPending ? "pending": 
                            isActive ? styles.active : ""}>
                                <i><VscHome /></i><p>Home</p>         
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/team"                 
                            className={({isActive, isPending}) => isPending ? "pending": 
                            isActive ? styles.active : ""}>
                                <i><BsFillPeopleFill /></i><p>Team</p>    
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings"
                            className={({isActive, isPending}) => isPending ? "pending": 
                            isActive ? styles.active : ""}>
                                <i><IoSettingsOutline /></i><p>Settings</p>
                            </NavLink>
                        </li>
                    </div>
                    <div className={styles.sideBarFooter}>
                        <div>
                            <Link to="/">
                            <div onClick={handleLogout}>
                            <i><FiLogIn /></i><p>Logout</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default SideBar