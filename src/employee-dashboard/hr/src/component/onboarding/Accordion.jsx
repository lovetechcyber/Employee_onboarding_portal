import React, { useState } from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { BiTaskX } from "react-icons/bi";
import { BiDirections, BiLinkExternal } from "react-icons/bi";


function AccordionComponent() {
  const [expandedSections, setExpandedSections] = useState({ 1: false, 2: false, 3: false });

  const toggleAccordionSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 ${
            expandedSections[3]
              ? 'focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              : ''
          }`}
          onClick={() => toggleAccordionSection(3)}
          aria-expanded={expandedSections[3]}
          aria-controls="accordion-collapse-body-3"
        >
          <span className='flex flex-row'>
            <div className={` rotate-${expandedSections[3] ? '180' : '0'} shrink-0`}>
                <AiOutlineDown size={25} />
            </div>
            <p>Open tasks</p>
            </span>
            <div className='flex'>
                {/* <FiExternalLink size={20} /> */}
                <p>15 Tasks</p>
              </div>
              <div className='flex text-red-500'>
                <BiLinkExternal size={25} />
                <p>tasks are overdue</p>
              </div>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${expandedSections[3] ? 'dark:bg-gray-900' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className='flex justify-between border-b-4 border-slate-300 py-3'>
            <div className='flex flex-row'>
                <BiTaskX size={25} />
                <p className='ml-2 text-red-500'>Qualification task</p>
            </div>
            <div className='bg-slate-200 text-red-500 px-3'>20 June 2023</div>
          </div>
          <div className='flex justify-between border-b-4 border-slate-300 py-3'>
            <div className='flex flex-row'>
                <BiTaskX size={25} />
                <p className='ml-2 text-red-500'>Academic Details</p>
            </div>
            <div className='bg-slate-200 text-red-500 px-3'>20 June 2023</div>
          </div>
          <div className='flex justify-between border-b-4 border-slate-300 py-3'>
            <div className='flex flex-row'>
                <BiTaskX size={25} />
                <p className='ml-2 text-red-500'>Professional Experience</p>
            </div>
            <div className='bg-slate-200 text-red-500 px-3'>20 June 2023</div>
          </div>
          <div className='flex justify-between border-b-4 border-slate-300 py-3'>
            <div className='flex flex-row'>
                <BiTaskX size={25} />
                <p className='ml-2 text-red-500'>Certification</p>
            </div>
            <div className='bg-slate-200 text-red-500 px-3'>20 June 2023</div>
          </div>
          <div className='flex justify-between border-b-4 border-slate-300 py-3'>
            <div className='flex flex-row'>
                <BiTaskX size={25} />
                <p className='ml-2 text-red-500'>About Me</p>
            </div>
            <div className='bg-slate-200 text-red-500 px-3'>20 June 2023</div>
          </div>
        
      </div>
    </div>
  );
}

export default AccordionComponent;
