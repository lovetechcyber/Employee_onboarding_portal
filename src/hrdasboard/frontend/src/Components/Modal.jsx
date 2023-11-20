import React, { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span
        className="mr-3 text-gray-900"
        onClick={() => setShowModal(true)}
      >
        <VscTriangleRight size={20} />
      </span>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-center text-3xl font-semibold">
                    Timecard Preview
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <h3 className="text-center text-2xl"> Monday 24 June 2019</h3>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">Request Time</p>
                    <div className="flex justify-between">
                        <div className="flex">
                            <p className="mx-3">Clock in</p>
                            <input 
                                type="datetime" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                        </div>
                        <div className="flex">
                            <p className="mx-3">Clock Out</p>
                            <input 
                                type="datetime" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                        </div>
                    </div>

                    <div className="mt-5 flex items-center">
                        <h5 className="mr-52 font-semibold">Job Code</h5>
                        <p className="font-semibold text-gray-700 dark:text-gray-400">Location</p>
                    </div>

                    <div className="mt-5 flex items-center">
                        <h5 className="mr-32 font-normal text-gray-700 dark:text-gray-400">Total</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">7 hours 55 minutes</p>
                    </div>
                    
                    <ul className="mt-5 w-96 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">In:</li>
                        <li className="w-full px-4 py-2 rounded-b-lg">Out:</li>
                    </ul>

                    <div className="mt-3">
                        <textarea rows="3" 
                            className="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Add Note">
                        </textarea>
                    </div>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Delete Request
                  </button>
                  <button
                    className="bg-slate-400 text-white active:bg-slate-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Decline Request
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Approve Request
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}