import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { BsCalendarDateFill, BsArrowReturnRight } from "react-icons/bs";
import { BiDirections, BiLinkExternal } from "react-icons/bi";

const Sidebar = () => {
  return (
    <>
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
                        <p className='font-normal'>admin@gmail.com</p>
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
                        <p className='font-normal'>manager@gmail.com</p>
                      </div>
                      <a className='text-green-500 font-medium' href="">View Profile</a>
                    </div>
              </div>
            </div>

            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
              <p className="text-xl font-semibold">People in your department</p>
                <div className="mt-3 flex flex-col md:space-y-0 md:space-x-6 md:flex-row">
                    <img src="https://tailwindcss.com/img/jonathan.jpg" className="rounded-full h-12 w-12" />
                    <div className=''>
                      <p className="font-bold">User 1</p>
                      <p className="">Marketing Officer</p>
                      <div className='flex pt-2'>
                        <FaMailBulk size={20} />
                        <p className='font-normal ml-2'>manager@gmail.com</p>
                      </div>
                      <a className='text-green-500 font-medium' href="">View Profile</a>
                    </div>
                </div>
                <div className="mt-3 flex flex-col md:space-y-0 md:space-x-6 md:flex-row">
                    <img src="https://tailwindcss.com/img/jonathan.jpg" className="rounded-full h-12 w-12" />
                    <div className=''>
                      <p className="font-bold">User 2</p>
                      <p className="">Marketing Executive</p>
                      <div className='flex pt-2'>
                        <FaMailBulk size={20} />
                        <p className='font-normal ml-2'>manager@gmail.com</p>
                      </div>
                      <a className='text-green-500 font-medium' href="">View Profile</a>
                    </div>
                </div>
                <div className="mt-3 flex flex-col md:space-y-0 md:space-x-6 md:flex-row">
                    <img src="https://tailwindcss.com/img/jonathan.jpg" className="rounded-full h-12 w-12" />
                    <div className=''>
                      <p className="font-bold">User 3</p>
                      <p className="">Marketing Consultant</p>
                      <div className='flex pt-2'>
                        <FaMailBulk size={20} />
                        <p className='font-normal ml-2'>manager@gmail.com</p>
                      </div>
                      <a className='text-green-500 font-medium' href="">View Profile</a>
                    </div>
                </div>
            </div>

          </aside>
    </>
  )
}

export default Sidebar
