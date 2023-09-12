import { useState } from "react";
import ModalPage from "./ModalPage";

const Modal = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };

  const toggleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div>
        <div className="text-center">
          <button
            className="w-[60%] text-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={toggleDrawer}
            aria-controls="drawer-disable-body-scrolling"
          >
            Click Here Please
          </button>
        </div>
        <div className="">
          <div
            id="drawer-disable-body-scrolling"
            className={`rounded fixed top-2 left-0 z-40 h-screen p-4 overflow-y-scroll transition-transform ${
              isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            } bg-white w-[60%] dark:bg-gray-800`}
            tabIndex="-1"
            aria-labelledby="drawer-disable-body-scrolling-label"
          >
            <div id="drawer-disable-body-scrolling" className="rooted">
              <h5
                id="drawer-disable-body-scrolling-label"
                className=" ml-8 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
              >
                Logo
              </h5>
              <button
                type="button"
                data-drawer-hide="drawer-disable-body-scrolling"
                aria-controls="drawer-disable-body-scrolling"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={toggleCloseDrawer}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
              <div
                className={`py-4 overflow-y-auto ${
                  isDrawerOpen ? "fade-in-from-right" : ""
                }`}
              >
                <ModalPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
