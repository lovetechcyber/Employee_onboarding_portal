import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillFileText} from "react-icons/ai";
import { BsCalendarDateFill, BsArrowReturnRight } from "react-icons/bs";
import { BiDirections, BiLinkExternal } from "react-icons/bi";
import { FaMailBulk } from "react-icons/fa";
import { FiRefreshCcw, FiExternalLink } from "react-icons/fi";


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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
            <ol className="flex items-center w-full pt-5">
              <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                  <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg aria-hidden="true" className=" w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                </span>
              </li>
              <li className="flex items-center w-full">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg aria-hidden="true" className=" w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                </span>
              </li>
              <li className="flex items-center w-full">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg aria-hidden="true" className=" w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                </span>
              </li>
              <li className="flex items-center w-full">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg aria-hidden="true" className=" w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                </span>
              </li>
            </ol>
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
                  <div className='mt-5 flex flex-row'>
                    <AiFillFileText size={30} />
                    <h1 className='text-green-500 font-bold ml-2'>View File & Links</h1>
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
            <div class="w-full flex justify-between p-3 mt-3 bg-green-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className='flex'>
                <BsArrowReturnRight size={25} />
                <p>Open tasks</p>
              </div>
              <div className='flex text-red-500'>
                <BiLinkExternal size={25} />
                <p>tasks are overdue</p>
              </div>
              <div className='flex'>
                <FiExternalLink size={25} />
                <p>Tasks</p>
              </div>
            </div>
            </div>
            
            {/* Pagination */}
            {/* <div className="flex items-center py-8">
              <a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
              <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
              <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
            </div> */}
          </section>

          {/* Sidebar Section */}
          <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
            <div className="w-full bg-blue-200 shadow flex flex-col my-4 p-6">
              <p className="text-xl font-semibold pb-5">Your First Day</p>
              <div className="flex flex-row pb-2">
                <BsCalendarDateFill size={30} />
                <p className='ml-2'>Sun 11 Oct 2023</p>
              </div>
              <div className="flex">
                <BiDirections size={30} />
                <p className='ml-2'>Get Directions</p>
              </div>
              
              <p className="text-xl font-semibold pt-5">HR Contact</p>
              <div className="mt-3 flex flex-col md:space-y-0 md:space-x-6 md:flex-row">
                    <img src="https://tailwindcss.com/img/jonathan.jpg" className="rounded-full h-12 w-12" />
                    <div className=''>
                      <h4 className="text-lg font-semibold md:text-left">Admin</h4>
                      <p className="dark:text-gray-400">Lorem ipsum dolor sit</p>
                      <div className='flex pt-2'>
                        <FaMailBulk size={20} />
                        <p className='font-normal text-md'>admin@gmail.com</p>
                      </div>
                    </div>
              </div>
            </div>

            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
              <p className="text-xl font-semibold">Get to know people</p>
              <p className="">Lorem ipsum dolor sit</p>
              <h4 className="text-lg font-semibold mt-5">Your Manager</h4>
                <div className="mt-3 flex flex-col md:space-y-0 md:space-x-6 md:flex-row">
                    <img src="https://tailwindcss.com/img/jonathan.jpg" className="rounded-full h-12 w-12" />
                    <div className=''>
                      <p className="">Manager Name</p>
                      <p className="">Marketing Officer</p>
                      <div className='flex pt-2'>
                        <FaMailBulk size={20} />
                        <p className='font-normal text-md'>manager@gmail.com</p>
                      </div>
                      <a className='text-green-500 font-medium' href="">View Profile</a>
                    </div>
              </div>
            </div>
          </aside>
      </div> 
    </>
  )
}

export default Home
