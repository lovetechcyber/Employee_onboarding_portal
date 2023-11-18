import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { GiTeamDowngrade } from "react-icons/gi";
import { HiOutlineDocument } from "react-icons/hi";
import { GrAnnounce } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "5%" },
};

function Layout({ children }) {
  const [isActive, setIsActive] = useState(true);
  const { user } = useSelector((state) => state.auth)
  // const userName = user ? user.email : null;

  const handleLogout = () => {
    localStorage.clear()
    alert('Logout Successful')
    Navigate('/')
  }

  return (
    <div className="flex">
      <SidebarWrapper
        animate={isActive ? "expanded" : "nonExpanded"}
        variants={variants}
        className={
          "h-screen flex flex-col border border-r-1 w-1/5" +
          (isActive ? "px-10" : "px-4")
        }
      >
        <div className="flex justify-center items-center">
          <img src="/employee-portal.jpg" height='150' width='150'  alt="Portal Logo" />
          {/* <span className={isActive ? "block" : "hidden"}>Employee Portal</span> */}
        </div>

        <div className="mt-3 flex flex-col space-y-8">
          <div className="w-full">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3 w-full p-5 rounded cursor-pointer border-y-4 border-indigo-500 items-center"
                  : "flex space-x-3 w-full p-2 rounded cursor-pointer items-center"
              }
            >
              <span className=""><AiFillDashboard /></span>
              <span className={!isActive ? "hidden" : "block"}>DASHBOARD</span>
            </NavLink>
          </div>

          <div className="w-full">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3 w-full p-5 rounded cursor-pointer border-y-4 border-indigo-500 items-center"
                  : "flex space-x-3 w-full p-2 rounded cursor-pointer items-center"
              }
            >
              <FaUserAlt />
              <span className={!isActive ? "hidden" : "block"}>PROFILE</span>
            </NavLink>
          </div>

          <div className="w-full">
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3 w-full p-5 rounded cursor-pointer border-y-4 border-indigo-500 items-center"
                  : "flex space-x-3 w-full p-2 rounded cursor-pointer items-center"
              }
            >
              <GiTeamDowngrade />
              <span className={!isActive ? "hidden" : "block"}>MY TEAM</span>
            </NavLink>
          </div>

          <div className="w-full">
            <NavLink
              to="/documents"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3 w-full p-5 rounded cursor-pointer border-y-4 border-indigo-500 items-center"
                  : "flex space-x-3 w-full p-2 rounded cursor-pointer items-center"
              }
            >
              <HiOutlineDocument />
              <span className={!isActive ? "hidden" : "block"}>DOCUMENTS</span>
            </NavLink>
          </div>

          <div className="w-full">
            <NavLink
              to="/announcements"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3 w-full p-5 rounded cursor-pointer border-y-4 border-indigo-500 items-center"
                  : "flex space-x-3 w-full p-2 rounded cursor-pointer items-center"
              }
            >
              <GrAnnounce />
              <span className={!isActive ? "hidden" : "block"}>
                ANNOUNCEMENTS
              </span>
            </NavLink>
          </div>

          <div className="w-full">
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3 w-full p-5 rounded cursor-pointer border-y-4 border-indigo-500 items-center"
                  : "flex space-x-3 w-full p-2 rounded cursor-pointer items-center"
              }
            >
              <TbReportSearch />
              <span className={!isActive ? "hidden" : "block"}>REPORTS</span>
            </NavLink>
          </div>

          <div className="w-full">
            <NavLink
              to="/timekeeping"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3 w-full p-5 rounded cursor-pointer border-y-4 border-indigo-500 items-center"
                  : "flex space-x-3 w-full p-2 rounded cursor-pointer items-center"
              }
            >
              <TbReportSearch />
              <span className={!isActive ? "hidden" : "block"}>
                TIMEKEEPING
              </span>
            </NavLink>
          </div>

          <div className="w-full">
            <NavLink
              to="/signout"
              className={({ isActive }) =>
                isActive
                  ? "flex space-x-3 w-full p-5 rounded cursor-pointer border-y-4 border-indigo-500 items-center"
                  : "flex space-x-3 w-full p-2 rounded cursor-pointer items-center"
              }
            >
              <FaSignOutAlt />
              <span className={!isActive ? "hidden" : "block"}>SIGNOUT</span>
            </NavLink>
          </div>
        </div>
      </SidebarWrapper>

      <ChildrenWrapper>
        <HeaderWrapper
          className="bg-blue-900 text-white fixed p-5"
          $headerWidth={isActive ? "calc(100vw - 20vw)" : "calc(100vw - 6vw)"}
        >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <div className="" onClick={() => setIsActive(!isActive)}>
              <AiOutlineMenu size={30} />
            </div>
            <div className="flex items-center">
              <FiSettings size={30} className="mr-5" />
              <h2 className="">{user?.name}</h2>
            </div>
          </div>
        </HeaderWrapper>

        <div className={!isActive ? "md:-ml-56" : "block"}>
          {children}
        </div>
      </ChildrenWrapper>
    </div>
  );
}

export default Layout;

const SidebarWrapper = styled(motion.div)`
  position: fixed;
  z-index: 999;
  background: #fff;
`;

const HeaderWrapper = styled.nav`
  width: ${({ $headerWidth }) => $headerWidth};
  right: 0;
  z-index: 999;
`;

const ChildrenWrapper = styled.div`
  width: calc(100vw - 20vw);
  margin-left: auto;
`;




