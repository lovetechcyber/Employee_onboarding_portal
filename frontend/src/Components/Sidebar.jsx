import React, { useState } from 'react'
import { AiOutlineMenu, AiFillDashboard } from "react-icons/ai";
import { FaUserAlt} from "react-icons/fa";
import { GiTeamDowngrade } from "react-icons/gi";
import { HiOutlineDocument } from "react-icons/hi";
import { GrAnnounce } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { motion } from "framer-motion"

const variants = {
    expanded: { width: '20%'},
    nonExpanded: { width: '5%'}
}

const Sidebar = ({ isActive, setIsActive}) => {
    const [activeNavIndex, setActiveNavIndex] = useState(0)
    

  return (
    <motion.div 
        animate = { isActive ? "expanded" : 'nonExpanded'}
        variants={variants} 
        className={'py-12 h-screen flex flex-col border border-r-1 w-1/5' + (isActive ? "px-10" : 'px-4')}>
        <div className='flex space-x-3 items-center'>
            <img src="" alt="Portal Logo" />
            <span className={isActive ? "block" : "hidden"}>Employee Portal</span>
        </div>

        {/* <div onClick={() => setIsActive(!isActive)} 
            className='w-5 h-5 bg-orange-300 rounded-full flex items-center'>
            <AiOutlineMenu className='' />
        </div> */}

        <div className='mt-10 flex flex-col space-y-8'>
            <div className='w-full'>
                <div className="flex space-x-3 w-full p-2 rounded cursor-pointer">
                    <AiFillDashboard />
                    <span className={!isActive ? "hidden" : "block"}>Dashboard</span>
                </div>
            </div>
            <div className='w-full'>
                <div className="flex space-x-3 w-full p-2 rounded bg-[#FF8C8C] cursor-pointer">
                    <FaUserAlt />
                    <span className={!isActive ? "hidden" : "block"}>Profile</span>
                </div>
            </div>
            <div className='w-full'>
                <div className="flex space-x-3 w-full p-2 rounded bg-[#FF8C8C]">
                    <GiTeamDowngrade />
                    <span className={!isActive ? "hidden" : "block"}>MY TEAM</span>
                </div>
            </div>
            <div className='w-full'>
                <div className="flex space-x-3 w-full p-2 rounded bg-[#FF8C8C]">
                    <HiOutlineDocument />
                    <span className={!isActive ? "hidden" : "block"}>DOCUMENTS</span>
                </div>
            </div>
            <div className='w-full'>
                <div className="flex space-x-3 w-full p-2 rounded bg-[#FF8C8C]">
                    <GrAnnounce />
                    <span className={!isActive ? "hidden" : "block"}>ANNOUNCEMENTS</span>
                </div>
            </div>
            <div className='w-full'>
                <div className="flex space-x-3 w-full p-2 rounded bg-[#FF8C8C]">
                    <TbReportSearch />
                    <span className={!isActive ? "hidden" : "block"}>REPORTS</span>
                </div>
            </div>
            

            

            {/* </div> */}
            {/* {navLinks.map((item, index) => (
                <div key={index} 
                    className={'flex space-x-3 p-2 rounded' + (activeNavIndex === index ? "bg-blue-500 font-semibold" : " ")}
                    onClick={() => setActiveNavIndex(index)}
                >
                    <item.icon />
                    <span className={isActive ? "block" : "hidden"}>{item?.name}</span>
                </div>
            ))} */}

        </div>
      
    </motion.div>
  )
}

export default Sidebar
