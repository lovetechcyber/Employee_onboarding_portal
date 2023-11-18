import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to='/' className="flex items-center">
            <img src="" className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HR DASHBOARD</span>
          </Link>
          <div className="flex items-center">
            <Link to='/login' className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Get Started</Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                {/* <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a> */}
              </li>
              <li>
                {/* <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
