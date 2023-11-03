import React, { useState } from "react";
import { HiBookOpen } from "react-icons/hi";
import { FaChartArea, FaTable } from "react-icons/fa";
import { RiDashboard3Fill } from "react-icons/ri";
import { BiChevronRight, BiSolidLayout, BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useStaticNavContext } from "../context/StaticNavContextProvider";
import { useSideNavLightContext } from "../context/SideNavLightContextProvider";

const SideBar = ({ toShowSideBar }) => {
  const { isNavbarStatic, setIsNavbarStatic } = useStaticNavContext();
  const { isSideNavLight, setIsSideNavLight } = useSideNavLightContext();

  const [toShowLayoutDropDown, setToShowLayoutDropDown] = useState(false);
  const [toShowPagesDropDown, setToShowPagesDropDown] = useState(false);
  const [toShowAuthentiationDropDown, setToShowAuthentiationDropDown] =
    useState(false);
  const [toShowErrorDropDown, setToShowErrorDropDown] = useState(false);

  return (
    <div
      className={`${toShowSideBar ? "w-auto lg:w-1/6" : "hidden"} ${
        isSideNavLight
          ? "bg-slate-200 text-black"
          : "bg-myAppThemeColor_1 text-gray-400"
      } ${
        isNavbarStatic ? "static" : "fixed top-0 left-0"
      } h-screen p-4 space-y-8 z-30`}
    >
      <h1 className={`text-white text-xl`}>Start Bootstrap</h1>

      <div className="flex flex-col space-y-3">
        <h4 className="text-gray-500 text-xs font-bold">CORE</h4>
        <NavLink
          to="/"
          className={`inline-flex items-center gap-2 text-md ${
            isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
          }`}
        >
          <RiDashboard3Fill /> Dashboard
        </NavLink>
      </div>

      <div className="flex flex-col space-y-3">
        <h4 className="text-gray-500 text-xs font-bold">INTERFACE</h4>
        <div
          className={`inline-flex justify-between gap-2 text-md cursor-pointer transition-all duration-1000 ${
            isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
          }`}
          onClick={() => {
            setToShowLayoutDropDown(!toShowLayoutDropDown);
            setToShowPagesDropDown(false);
          }}
        >
          <span className="inline-flex items-center gap-2">
            <BiSolidLayout />
            Layouts
          </span>{" "}
          {!toShowLayoutDropDown ? (
            <BiChevronRight size={20} />
          ) : (
            <BiChevronDown size={20} />
          )}
        </div>
        {toShowLayoutDropDown && (
          <div className="px-8 flex flex-col gap-y-3">
            <NavLink
              to="/static-navigation"
              className={`${
                isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
              }`}
              onClick={() => setIsNavbarStatic(!isNavbarStatic)}
            >
              Static Navigation
            </NavLink>
            <NavLink
              to="/sidenav-light"
              className={`${
                isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
              }`}
              onClick={() => setIsSideNavLight(!isSideNavLight)}
            >
              Light SideNav
            </NavLink>
          </div>
        )}
        <div
          className={`inline-flex justify-between gap-2 text-md cursor-pointer transition-all duration-1000 ${
            isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
          }`}
          onClick={() => {
            setToShowPagesDropDown(!toShowPagesDropDown);
            setToShowLayoutDropDown(false);
          }}
        >
          <span className="inline-flex items-center gap-2">
            <HiBookOpen size={20} />
            Pages
          </span>{" "}
          {!toShowPagesDropDown ? (
            <BiChevronRight size={20} />
          ) : (
            <BiChevronDown size={20} />
          )}
        </div>
        {toShowPagesDropDown && (
          <div className="px-8 flex flex-col gap-y-3">
            <span
              className={`inline-flex items-center gap-2 cursor-pointer ${
                isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
              }`}
              onClick={() => {
                setToShowAuthentiationDropDown(!toShowAuthentiationDropDown);
                setToShowErrorDropDown(false);
              }}
            >
              Authentication
              {!toShowAuthentiationDropDown ? (
                <BiChevronRight size={20} />
              ) : (
                <BiChevronDown size={20} />
              )}
            </span>

            {toShowAuthentiationDropDown && (
              <div className="px-8 flex flex-col gap-y-3">
                <NavLink
                  to="/login"
                  className={`${
                    isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
                  }`}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={`${
                    isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
                  }`}
                >
                  Register
                </NavLink>
                <NavLink
                  to="/forgot-password"
                  className={`${
                    isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
                  }`}
                >
                  Forgot Password
                </NavLink>
              </div>
            )}

            <span
              className={`inline-flex items-center gap-2 cursor-pointer ${
                isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
              }`}
              onClick={() => {
                setToShowAuthentiationDropDown(false);
                setToShowErrorDropDown(!toShowErrorDropDown);
              }}
            >
              Error
              {!toShowErrorDropDown ? (
                <BiChevronRight size={20} />
              ) : (
                <BiChevronDown size={20} />
              )}
            </span>

            {toShowErrorDropDown && (
              <div className="px-8 flex flex-col gap-y-3">
                <NavLink
                  to="/page-401"
                  className={`${
                    isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
                  }`}
                >
                  401 Page
                </NavLink>
                <NavLink
                  to="/page-404"
                  className={`${
                    isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
                  }`}
                >
                  404 Page
                </NavLink>
                <NavLink
                  to="/page-500"
                  className={`${
                    isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
                  }`}
                >
                  500 Page
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-3">
        <h4 className="text-gray-500 text-xs font-bold">ADDONS</h4>
        <NavLink
          to="/charts"
          className={`${
            isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
          } inline-flex items-center gap-2 text-md`}
        >
          <FaChartArea /> Charts
        </NavLink>
        <NavLink
          to="/tables"
          className={`${
            isSideNavLight ? "hover:text-slate-600" : "hover:text-white"
          } inline-flex items-center gap-2 text-md`}
        >
          <FaTable /> Tables
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
