import React from 'react'
import { BiTime } from "react-icons/bi";
import { Link } from 'react-router-dom';

function formatDate(date) {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);

  return formattedDate.replace(/(\d)(st|nd|rd|th)/, '$1<sup>$2</sup>');
}


const Timekeeping = () => {
  const today = new Date();
  const formattedDate = formatDate(today);

  return (
    <div className='mt-32 p-5'>
      <div className="border-l-4 border-indigo-500">
          <h1 className='pl-5 text-3xl font-semibold'>TIMEKEEPING</h1>
          <p className="pl-5 self-center text-2xl whitespace-nowrap dark:text-white">{formattedDate}</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-14'>
        <div className=' bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='relative flex p-5 text-lg font-medium text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800'>
            <div className='absolute left-0 top-0 rounded-full bg-blue-600 p-2.5 text-white flex items-center'>
              <BiTime size={45} />
            </div>
            <div className='ml-14'>TIME OFF REQUESTS</div>
          </div>
          <div className='p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800'>
            <div className="flex items-center justify-end mb-4">
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  View all Requests
              </a>
            </div>
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customer</h5>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  APPROVE
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  DENY
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-blue-600 hover:underline dark:text-blue-500">Date</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Full Time PTO</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">24 Hours</p>
            </div>
          </div>
        </div>

        <div className=' bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='relative p-5 text-lg font-medium text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800'>
            <div className='absolute left-0 top-0 rounded-full bg-blue-600 p-2.5 text-white flex items-center'>
              <BiTime size={45} />
            </div>
            <div className='ml-14'>WHO'S WORKING</div>
          </div>
          <div className='p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800'>
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-bold leading-none text-green-600 hover:underline dark:text-green-500">ALL EMPLOYEES</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">ON THE CLOCK</p>
            </div>
            <div className="flex items-center justify-between mt-10 border-b-4 border-black">
              <h5 className="">USER'S NAME</h5>
              <p className="">1HOUR 56 MINUTES</p>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-blue-500">Biweekly</h5>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-14 w-full bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='relative flex justify-between p-5 text-lg font-medium text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800'>
            <div className='absolute left-0 top-0 rounded-full bg-blue-600 p-2.5 text-white flex items-center'>
              <BiTime size={45} />
            </div>
          <div className='ml-14'>PAY RECORD</div>
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            VIEW ALL PAYPERIODS
          </a>
        </div>
        <div className='p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800'>
          <div className='flex justify-between p-5 text-lg font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800'>
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white border-b-4">Latest Customer</h5>
            <Link to='/timecard'>
              <button 
                type="button" 
                className="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                VIEW TIMECARD
              </button>
            </Link>
          </div>
          <div>0Hour 0Minute Regular</div>
          <div className='text-red-500'>0Edit Request</div>
          <div className='text-blue-500'>BiWeekly</div>
        </div>
      
      </div>

    </div>
  )
}

export default Timekeeping
