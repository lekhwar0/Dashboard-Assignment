import React from "react";
import { FiMenu } from "react-icons/fi";
import { HiUser } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Popup } from "reactjs-popup";
import { useStaticNavContext } from "../context/StaticNavContextProvider";

const Header = ({ toShowSideBar, setToShowSideBar }) => {
  const { isNavbarStatic } = useStaticNavContext();

  return (
    <div
      className={`bg-myAppThemeColor_1 ${
        isNavbarStatic ? "static" : "sticky top-0"
      }  z-20`}
    >
      <div className="container mx-auto px-6 py-3 flex gap-2 justify-between">
        <div className="flex items-center gap-4 text-white cursor-pointer">
          <h1
            className={`${
              toShowSideBar ? "hidden" : "flex"
            } text-lg font-medium transition-all duration-100`}
          >
            Start Bootstrap
          </h1>
          {!toShowSideBar ? (
            <FiMenu
              className="hidden lg:flex h-5 w-5 transition-all duration-300"
              onClick={() => setToShowSideBar(true)}
            />
          ) : (
            <RxCross1
              className="hidden lg:flex h-5 w-5 transition-all duration-300"
              onClick={() => setToShowSideBar(false)}
            />
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center justify-center">
            <input
              type="text"
              placeholder="Search for..."
              className="px-3 py-2 rounded-l outline-none"
            />
            <AiOutlineSearch className="bg-blue-500 h-10 w-10 p-2 text-white rounded-r-md cursor-pointer hover:bg-blue-600" />
          </div>

          <Popup
            trigger={
              <div className="flex items-center gap-1 text-white cursor-pointer">
                <HiUser className="h-5 w-5" />
                <IoMdArrowDropdown className="h-5 w-5" />
              </div>
            }
            position="bottom right"
          >
            <div className="bg-white py-3 rounded-md flex flex-col items-left space-y-2 border drop-shadow-sm">
              <h4 className="px-7 py-1 hover:bg-gray-200 cursor-pointer">
                Settings
              </h4>
              <h4 className="px-7 py-1 hover:bg-gray-200 cursor-pointer">
                Activity Log
              </h4>
              <hr className="w-full" />
              <h4 className="px-7 py-1 hover:bg-gray-200 cursor-pointer">
                Logout
              </h4>
            </div>
          </Popup>
          {!toShowSideBar ? (
            <FiMenu
              className="lg:hidden h-5 w-5 text-white transition-all duration-300"
              onClick={() => setToShowSideBar(true)}
            />
          ) : (
            <RxCross1
              className="lg:hidden h-5 w-5 text-white transition-all duration-300"
              onClick={() => setToShowSideBar(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
