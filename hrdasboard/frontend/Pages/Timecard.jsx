import React from 'react'
import { BiTime } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProductTable from '../Components/Table';


const Timecard = () => {
  return (
    <div className='mt-32 p-5'>
      <div className="border-l-4 border-indigo-500">
          <h1 className='pl-5 text-3xl font-semibold'>EMPLOYEE TIMECARD</h1>
      </div>

      <div className='mt-14 w-full bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='relative flex justify-between p-5 text-lg font-medium text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800'>
            <div className='absolute left-0 top-0 rounded-full bg-blue-600 p-2.5 text-white flex items-center'>
              <BiTime size={45} />
            </div>
          <div className='ml-14'>EMPLOYEE TIMECARD</div>
          <Link to='/timekeeping' className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            BACK TO PAYPERIODS
          </Link>
        </div>
        <div className='p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800'>
          {/* <div className='flex justify-between p-5 text-lg font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800'> */}
            <p className="flex justify-center text-center text-lg text-gray-900 dark:text-white">You are now viewing pay frequency-Biweekly<FcCheckmark /></p>
            <div className='flex justify-around mt-10'>
                <h2 className='text-md font-semibold'>Pay Period</h2>
                <div className='flex'>
                    <span className='pt-3'><AiOutlineLeft /></span>
                    <div className='border md:px-6 md:mx-6'>
                        1/11/23 - 29/11/23
                    </div>
                    <span className='pt-3'><AiOutlineRight /></span>
                </div>
                <div className='flex'>
                    <h2 className='text-md font-semibold pt-2 ml-1'>Employee</h2>
                    <div className='mx-6'>
                        <select id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option defaultValue=''>Employee</option>
                            <option value="">User 1</option>
                            <option value="">User 2</option>
                            <option value="">User 3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <h5 className="font-normal">7 Pending Edit Requests</h5>
              <p className="font-normal text-orange-700 dark:text-orange-400">Aprove Timecard!</p>
            </div>
            <div className='mt-6'><ProductTable /></div>
        </div>
      </div>

    </div>
  )
}

export default Timecard
