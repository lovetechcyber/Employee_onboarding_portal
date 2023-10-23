import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

function Navbar({ isActive, setIsActive}) {

  return (
    <>
      <nav className="bg-blue-900 text-white p-5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            {/* <img src="" className="h-8 mr-3" alt="Flowbite Logo" /> */}
            <div onClick={() => setIsActive(!isActive)}>
                <AiOutlineMenu size={30} className='' />
            </div>
          <div className="flex items-center">
            <FiSettings size={30} className='mr-5' />
            <h2 className="">User</h2>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
