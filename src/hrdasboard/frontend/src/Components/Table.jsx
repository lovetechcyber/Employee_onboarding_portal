import React from 'react';
import { AiOutlinePlus, AiFillEye } from "react-icons/ai";
import { VscTriangleRight } from "react-icons/vsc";
import Modal from './Modal';


function ProductTable() {
    
    return (
        <div className="relative overflow-x-auto p-5">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-20 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">In</th>
                        <th scope="col" className="px-6 py-3">Out</th>
                        <th scope="col" className="px-6 py-3">Hours</th>
                        <th scope="col" className="px-6 py-3">Category</th>
                        <th scope="col" className="px-6 py-3">Job/Location</th>
                        <th scope="col" className="px-6 py-3">Note</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <span className='mr-3'><AiOutlinePlus size={20} /></span>
                            Sun/6/23
                        </th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="flex px-6 py-4 font-medium text-gray-900 dark:text-white">
                            <span className=''><AiOutlinePlus size={20} /></span>
                            <span className=''><AiFillEye size={20} /></span>
                            <span><Modal /></span>
                            Mon/7/23
                        </th>
                        <td className="px-6 py-4">7:23am</td>
                        <td className="px-6 py-4">3:18pm</td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">Regular</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800">
                        <th scope="row" className="flex px-6 py-4 font-medium text-gray-900 dark:text-white">
                            <span className=''><AiOutlinePlus size={20} /></span>
                            <span className=''><AiFillEye size={20} /></span>
                            <span><Modal /></span>
                            Tues/8/23
                        </th>
                        <td className="px-6 py-4">8:23</td>
                        <td className="px-6 py-4">4:29</td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">Regular</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800">
                        <th scope="row" className="flex px-6 py-4 font-medium text-gray-900 dark:text-white">
                            <span className=''><AiOutlinePlus size={20} /></span>
                            <span className=''><AiFillEye size={20} /></span>
                            <span><Modal /></span>
                            Wed/9/23
                        </th>
                        <td className="px-6 py-4">6:23</td>
                        <td className="px-6 py-4">1:29</td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">Regular</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800">
                        <th scope="row" className="flex px-6 py-4 font-medium text-gray-900 dark:text-white">
                            <span className=''><AiOutlinePlus size={20} /></span>
                            <span className=''><AiFillEye size={20} /></span>
                            <div><Modal /></div>
                            Thur/10/23
                        </th>
                        <td className="px-6 py-4">6:20</td>
                        <td className="px-6 py-4">2:29</td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">Regular</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800">
                        <th scope="row" className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <span className='mr-3'><AiOutlinePlus size={20} /></span>
                            Friday/11/23
                        </th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800">
                        <th scope="row" className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <span className='mr-3'><AiOutlinePlus size={20} /></span>
                            Sat/11/23
                        </th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;
