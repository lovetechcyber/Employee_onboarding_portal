import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCalendarDateFill, BsArrowReturnRight } from "react-icons/bs";
import { BiDirections, BiLinkExternal } from "react-icons/bi";
import { FiRefreshCcw, FiExternalLink } from "react-icons/fi";
import Popover from '../Components/Popover';
import Sidebar from '../Components/Sidebar';
import ModalComponent from '../Components/FileModal';
import AccordionComponent from '../Components/Accordion';
import AccordionComp from '../Components/Accordion';


const Home = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className='container mx-auto flex flex-col py-4 px-6 bg-white shadow w-full'>
        <div className='mb-2 sm:mb-0'>
          <Link to='/' className='text-2xl no-underline text-grey-darkest hover:text-blue-dark'>Home</Link>
          <span className='text-2xl'> / </span>
          <div className="relative inline-flex items-center">
            <button
              className={'font-medium rounded-lg text-xl py-2.5 text-center inline-flex items-center'}
              type="button"
              onClick={toggleDropdown}
            >
              Onboarding{' '}
              <svg
                className={`w-2.5 h-2.5 ml-2.5 ${isDropdownOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div id="dropdown" className="mt-32 z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
              )}
        </div>
        </div>
        </div>

        <div className="container mx-auto grid grid-cols-2 p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src="https://source.unsplash.com/75x75/?portrait"
              alt="Profile Picture"
              className="flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold md:text-left">Hello User</h4>
              <p className="dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
          
          <div className=''>
            <Popover />
          </div>
        </div>

        <div className="container mx-auto flex flex-wrap py-3">
          <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            
            <div className="bg-white shadow flex flex-col my-4 p-6 rounded-lg md:p-8">
            <h1 className='font-bold text-3xl'>Your Profile</h1>
                <div className='grid grid-cols-2 mt-5'>
                  <div className="flex flex-col md:space-y-0 md:space-x-6 md:flex-row">
                    <img src="https://tailwindcss.com/img/jonathan.jpg" className="rounded-full h-12 w-12" />
                    <div className=''>
                      <h4 className="text-lg font-semibold md:text-left">User</h4>
                      <p className="dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-lg font-semibold'>Your Onboarding progress</h3>
                    <div className='flex flex-row'>
                      <h4 className='text-md font-medium'>1/2</h4>
                      <div className="mt-2 mx-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                    <p>Progess of your Onboarding journey</p>
                    <p className='text-red-500 font-semibold'>10 tasks are overdue</p>
                  </div>
                </div>
                <div className="bg-white flex justify-between mt-5 border-t-4 border-indigo-500">
                  <div className='mt-5'>
                    <h1 className='text-2xl font-bold'>File & Document Download</h1>
                    <p>Download your file</p>
                  </div>
                  <div className=''>
                    <ModalComponent />
                  </div>
                </div>
            </div>

            <div className="p-4 bg-white shadow rounded-lg md:p-8">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Tasks to be done</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
            <div className='flex'>
              <button 
                type="button" 
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Show my next task
              </button>
              <div className='ml-3'>
                <FiRefreshCcw size={30} />
              </div>
            </div>
            
            <div className='md:p-8'>
              <AccordionComponent />
            </div>
            </div>

            <div className="mt-3 p-4 bg-white shadow rounded-lg md:p-8">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Activity</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">You can write any comment, feedback or question here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam autem aspernatur ut repudiandae praesentium dicta! Nam consectetur</p>
            {/* <AccordionComponent /> */}
         
            </div>
            
            {/* Pagination */}
            {/* <div className="flex items-center py-8">
              <a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
              <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
              <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
            </div> */}
          </section>

          <Sidebar />
      </div> 
    </>
  )
}

export default Home
