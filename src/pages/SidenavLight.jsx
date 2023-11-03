import React, { useState } from "react";
import { Footer, Header, SideBar } from "../components";
import { NavLink } from "react-router-dom";
import { useSideNavLightContext } from "../context/SideNavLightContextProvider";

const SidenavLight = () => {
  const [toShowSideBar, setToShowSideBar] = useState(true);
  const { setIsSideNavLight } = useSideNavLightContext();

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
          <h2 className="text-4xl font-medium">Sidenav Light</h2>
          <div className="flex gap-2">
            <NavLink
              to="/"
              className="text-blue-500 border-blue-500 border-b"
              onClick={() => setIsSideNavLight(false)}
            >
              Dashboard
            </NavLink>
            {" / "}
            <p>Sidenav Light</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SidenavLight;
