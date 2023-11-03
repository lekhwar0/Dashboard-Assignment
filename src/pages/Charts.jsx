import React, { useState } from "react";
import {
  BarChartData,
  LineChartData,
  Footer,
  Header,
  SideBar,
  PieChartData,
} from "../components";
import { NavLink } from "react-router-dom";

const Charts = () => {
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
          <h2 className="text-4xl font-medium">Charts</h2>
          <div className="flex gap-2">
            <NavLink to="/" className="text-blue-500 border-blue-500 border-b">
              Dashboard
            </NavLink>
            {" / "}
            <p>Charts</p>
          </div>
          <LineChartData />
          <div className="grid lg:grid-cols-2 gap-6">
            <BarChartData />
            <PieChartData />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Charts;
