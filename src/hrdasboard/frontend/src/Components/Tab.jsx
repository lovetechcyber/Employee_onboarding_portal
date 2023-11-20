import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

const Tabs = ({ profileData }) => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <ul
        className="mb-4 flex list-none flex-row flex-wrap border-b-0 pl-0"
        id="tabs-tab3"
        role="tablist"
      >
        <li role="presentation">
          <button
            // href="#personal"
            className={`my-2 block border px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
              activeTab === "personal"
                ? "bg-gray-500 text-primary"
                : "text-neutral-500"
            } hover:isolate hover-border-transparent hover-bg-neutral-100 focus:isolate focus-border-transparent dark-text-neutral-400 dark-hover-bg-transparent`}
            // id="tabs-home-tab3"
            onClick={() => handleTabClick("personal")}
            role="tab"
            aria-controls="personal"
            aria-selected={activeTab === "personal"}
          >
            Personal
          </button>
        </li>
        <li role="presentation">
          <a
            href="#job"
            className={`my-2 block border text-black px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
              activeTab === "job"
                ? "text-primary bg-gray-500"
                : "text-neutral-500"
            } hover:isolate hover-border-transparent hover-bg-neutral-100 focus:isolate focus-border-transparent dark-text-neutral-400 dark-hover-bg-transparent`}
            // id="tabs-profile-tab3"
            onClick={() => handleTabClick("job")}
            role="tab"
            aria-controls="job"
            aria-selected={activeTab === "job"}
          >
            Job
          </a>
        </li>
        <li role="presentation">
          <a
            href="#timeoff"
            className={`my-2 block border  text-black px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
              activeTab === "timeoff"
                ? "text-primary bg-gray-500"
                : "text-neutral-500"
            } hover:isolate hover-border-transparent hover-bg-neutral-100 focus:isolate focus-border-transparent dark-text-neutral-400 dark-hover-bg-transparent`}
            // id="tabs-messages-tab3"
            onClick={() => handleTabClick("timeoff")}
            role="tab"
            aria-controls="timeoff"
            aria-selected={activeTab === "timeoff"}
          >
            Time Off
          </a>
        </li>
        <li role="presentation">
          <a
            href="#emergency"
            className={`my-2 block border  text-black px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
              activeTab === "emergency"
                ? "text-primary bg-gray-500"
                : "text-neutral-500"
            } hover:isolate hover-border-transparent hover-bg-neutral-100 focus:isolate focus-border-transparent dark-text-neutral-400 dark-hover-bg-transparent`}
            // id="tabs-messages-tab3"
            onClick={() => handleTabClick("emergency")}
            role="tab"
            aria-controls="emergency"
            aria-selected={activeTab === "emergency"}
          >
            Emergency
          </a>
        </li>
        <li role="presentation">
          <a
            href="#documents"
            className={`my-2 block border  text-black px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
              activeTab === "documents"
                ? "text-primary bg-gray-500"
                : "text-neutral-500"
            } hover:isolate hover-border-transparent hover-bg-neutral-100 focus:isolate focus-border-transparent dark-text-neutral-400 dark-hover-bg-transparent`}
            // id="tabs-messages-tab3"
            onClick={() => handleTabClick("documents")}
            role="tab"
            aria-controls="documents"
            aria-selected={activeTab === "documents"}
          >
            Documents
          </a>
        </li>
        <li role="presentation">
          <a
            href="#notes"
            className={`my-2 block border  text-black px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
              activeTab === "notes"
                ? "text-primary bg-gray-500"
                : "text-neutral-500"
            } hover:isolate hover-border-transparent hover-bg-neutral-100 focus:isolate focus-border-transparent dark-text-neutral-400 dark-hover-bg-transparent`}
            id="tabs-messages-tab3"
            onClick={() => handleTabClick("notes")}
            role="tab"
            aria-controls="notes"
            aria-selected={activeTab === "notes"}
          >
            Notes
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tasks"
            className={`my-2 block border  text-black px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
              activeTab === "tasks"
                ? "text-primary bg-gray-500"
                : "text-neutral-500"
            } hover:isolate hover-border-transparent hover-bg-neutral-100 focus:isolate focus-border-transparent dark-text-neutral-400 dark-hover-bg-transparent`}
            id="tabs-messages-tab3"
            onClick={() => handleTabClick("tasks")}
            role="tab"
            aria-controls="tasks"
            aria-selected={activeTab === "tasks"}
          >
            Tasks
          </a>
        </li>
      </ul>

      {/* Tabs content */}
      <div>
        <div
          className={`transition-opacity duration-150 ease-linear ${
            activeTab === "personal" ? "block" : "hidden"
          }`}
          id="personal"
          role="tabpanel"
          aria-labelledby="tabs-home-tab3"
        >
          <div className="flex justify-between">
            <div className="flex">
              <CgProfile size={30} />
              <h1 className="text-2xl font-bold">Personal</h1>
            </div>

            <div className="relative inline-block text-center">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-slate-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={toggleDropdown}
              >
                Manage
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className=" bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  onClick={toggleDropdown}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="mt-6 w-fit">
              <img
                src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
                className="rounded-full w-28 "
                alt="profile picture"
              />
            </div>

            <form>
              <div className="grid grid-cols-2 mt-5">
                <label className="">Profile Photo</label>
                <input
                  className="p-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="file"
                />
                {/* <input type="file" className="text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100
                "/> */}
              </div>

              <div className="grid grid-cols-2 mt-5">
                <label htmlFor="dateofbirth">Date of Birth</label>
                <div>
                  {profileData.dateOfBirth}
                  <input
                    type="date"
                    name=""
                    id=""
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"'
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 mt-5">
                <label htmlFor="name">Name</label>
                <div>
                  {profileData.fullName}
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
          className={`transition-opacity duration-150 ease-linear ${
            activeTab === "job" ? "block" : "hidden"
          }`}
          id="job"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab3"
        >
          Job
        </div>
        <div
          className={`transition-opacity duration-150 ease-linear ${
            activeTab === "timeoff" ? "block" : "hidden"
          }`}
          id="timeoff"
          role="tabpanel"
          aria-labelledby="tabs-messages-tab3"
        >
          Time Off
        </div>
        <div
          className={`transition-opacity duration-150 ease-linear ${
            activeTab === "emergency" ? "block" : "hidden"
          }`}
          id="emergency"
          role="tabpanel"
          aria-labelledby="tabs-messages-tab3"
        >
          Emergency
        </div>
        <div
          className={`transition-opacity duration-150 ease-linear ${
            activeTab === "documents" ? "block" : "hidden"
          }`}
          id="documents"
          role="tabpanel"
          aria-labelledby="tabs-messages-tab3"
        >
          Documents
        </div>
        <div
          className={`transition-opacity duration-150 ease-linear ${
            activeTab === "notes" ? "block" : "hidden"
          }`}
          id="notes"
          role="tabpanel"
          aria-labelledby="tabs-messages-tab3"
        >
          Notes
        </div>
        <div
          className={`transition-opacity duration-150 ease-linear ${
            activeTab === "tasks" ? "block" : "hidden"
          }`}
          id="tasks"
          role="tabpanel"
          aria-labelledby="tabs-messages-tab3"
        >
          Tasks
        </div>
      </div>
    </div>
  );
};

export default Tabs;
