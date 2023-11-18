import React, { useEffect, useState } from 'react'
import { SiPowerpages } from "react-icons/si";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Tabs from '../Components/Tab';
import axios from 'axios'
import { toast } from 'react-toastify'

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: ''
  })

  useEffect(() => {
    fetchProfileData()
  }, [])

  const fetchProfileData = async () => {
    try {
        const { data } = await axios.get('/hr/employee/get-employees');
        // Assuming data is an array, you may need to adjust this based on your API response structure
        const userProfile = data.find((user) => user.fullName === 'HR Staff');
        setProfileData(userProfile);
    } catch (error) {
        console.error(error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
        const { data } = await axios.put(`/hr/employee/update-employee/${profileData._id}`, profileData);
        console.log(data);
        toast.success('Employee Details Successfully Updated')
    } catch (error) {
        console.error(error);
        toast.error('Cannot Update Details')
    }
  };

  return (
    <>
    <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-32'>
        <div className="border-l-4 border-indigo-500">
          <h1 className='pl-5 text-3xl font-semibold'>{profileData.fullName}</h1>
          <p className="pl-5 self-center text-2xl whitespace-nowrap dark:text-white">Profile</p>
        </div>

        <div className=''>
        <div className='flex'>
        <form>
          <div className="relative mr-2">
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <button 
          type="button" 
          className="py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          CLEAR
        </button>
        </div>

        <div className='flex mt-3'>
          <SiPowerpages className='' />
          <p className='ml-3 mr-3'>5 of 6</p>
              <AiFillCaretLeft />
              <a href="#" className="text-blue-600 visited:text-purple-600 mx-2">Prev</a>
                <span> | </span>
              <a href="#" className="text-blue-600 visited:text-purple-600 mx-2">Next</a>
              <AiFillCaretRight />
        </div>
  
        </div>
    </div>

    <div className='container mx-auto border border-slate-300 p-4'>
      <Tabs profileData={profileData} />
    </div>
    </>
  )
}

export default Profile
