import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { AiFillDashboard } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { GiTeamDowngrade } from 'react-icons/gi';
import { HiOutlineDocument } from 'react-icons/hi';
import { GrAnnounce } from 'react-icons/gr';
import { TbReportSearch } from 'react-icons/tb';
import { motion } from 'framer-motion';

const variants = {
  expanded: { width: '20%' },
  nonExpanded: { width: '5%' },
};

function Layout({ children }) {
  const [isActive, setIsActive] = useState(true);
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  return (
    <div className="flex">
      <motion.div
        animate={isActive ? 'expanded' : 'nonExpanded'}
        variants={variants}
        className={'py-12 h-screen flex flex-col border border-r-1 w-1/5' + (isActive ? 'px-10' : 'px-4')}
      >
        <div className='flex space-x-3 items-center'>
          <img src='' alt='Portal Logo' />
          <span className={isActive ? 'block' : 'hidden'}>Employee Portal</span>
        </div>

        <div className='mt-10 flex flex-col space-y-8'>
          <div className='w-full'>
            <Link to='/dashboard' className='flex space-x-3 w-full p-2 rounded cursor-pointer'>
              <AiFillDashboard />
              <span className={!isActive ? 'hidden' : 'block'}>Dashboard</span>
            </Link>
          </div>

          <div className='w-full'>
            <Link to='/profile' className='flex space-x-3 w-full p-2 rounded cursor-pointer'>
              <FaUserAlt />
              <span className={!isActive ? 'hidden' : 'block'}>Profile</span>
            </Link>
          </div>

          <div className='w-full'>
            <Link to='/team' className='flex space-x-3 w-full p-2 rounded cursor-pointer'>
              <GiTeamDowngrade />
              <span className={!isActive ? 'hidden' : 'block'}>MY TEAM</span>
            </Link>
          </div>

          <div className='w-full'>
            <Link to='/documents' className='flex space-x-3 w-full p-2 rounded cursor-pointer'>
              <HiOutlineDocument />
              <span className={!isActive ? 'hidden' : 'block'}>DOCUMENTS</span>
            </Link>
          </div>

          <div className='w-full'>
            <Link to='/announcements' className='flex space-x-3 w-full p-2 rounded cursor-pointer'>
              <GrAnnounce />
              <span className={!isActive ? 'hidden' : 'block'}>ANNOUNCEMENTS</span>
            </Link>
          </div>

          <div className='w-full'>
            <Link to='/reports' className='flex space-x-3 w-full p-2 rounded cursor-pointer'>
              <TbReportSearch />
              <span className={!isActive ? 'hidden' : 'block'}>REPORTS</span>
            </Link>
          </div>
        </div>
      </motion.div>

      <div className='flex-1'>
        <nav className='bg-blue-900 text-white p-5'>
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
            <div className='' onClick={() => setIsActive(!isActive)}>
              <AiOutlineMenu size={30} />
            </div>
            <div className='flex items-center'>
              <FiSettings size={30} className='mr-5' />
              <h2 className=''>User</h2>
            </div>
          </div>
        </nav>

        {children}

      </div>
    </div>
  );
}

export default Layout;
