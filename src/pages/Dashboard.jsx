import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

import {
  Header,
  Footer,
  BarChartData,
  LineChartData,
  EmployeesDataTable,
  SideBar,
} from "../components";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [toShowSideBar, setToShowSideBar] = useState(true);

  return (
    <div className="flex justify-end h-screen">
      <SideBar
        toShowSideBar={toShowSideBar}
        setToShowSideBar={setToShowSideBar}
      />
      <div
        className={`h-screen relative ${
          toShowSideBar ? "w-screen lg:w-5/6" : "w-screen"
        } transition-all	duration-300`}
      >
        <Header
          toShowSideBar={toShowSideBar}
          setToShowSideBar={setToShowSideBar}
        />
        <div className={`container min-h-screen mx-auto p-6 space-y-6`}>
          <div className="space-y-2">
            <h2 className="text-4xl font-medium">Dashboard</h2>
            <p>Dashboard</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-500 text-white border border-blue-700 rounded-md">
              <p className="p-4">Primary Card</p>
              <NavLink
                to="/"
                className="p-2 flex items-center justify-between cursor-pointer border-blue-700 border-t"
              >
                <p className="px-2 text-sm">View Details</p>
                <BiChevronRight className="h-5 w-5" />
              </NavLink>
            </div>
            <div className="bg-yellow-400 text-white border border-yellow-500 rounded-md">
              <p className="p-4">Warning Card</p>
              <NavLink
                to="/"
                className="p-2 flex items-center justify-between cursor-pointer border-yellow-500 border-t"
              >
                <p className="px-2 text-sm">View Details</p>
                <BiChevronRight className="h-5 w-5" />
              </NavLink>
            </div>
            <div className="bg-green-700 text-white border border-green-800 rounded-md">
              <p className="p-4">Success Card</p>
              <NavLink
                to="/"
                className="p-2 flex items-center justify-between cursor-pointer border-green-800 border-t"
              >
                <p className="px-2 text-sm">View Details</p>
                <BiChevronRight className="h-5 w-5" />
              </NavLink>
            </div>
            <div className="bg-red-500 text-white border border-red-700 rounded-md">
              <p className="p-4">Danger Card</p>
              <NavLink
                to="/"
                className="p-2 flex items-center justify-between cursor-pointer border-red-700 border-t"
              >
                <p className="px-2 text-sm">View Details</p>
                <BiChevronRight className="h-5 w-5" />
              </NavLink>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-center -z-10">
            <LineChartData />
            <BarChartData />
          </div>
          <EmployeesDataTable />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
