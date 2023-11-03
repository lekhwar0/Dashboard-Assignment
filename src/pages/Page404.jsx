import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Error404 from "../images/404-Error.png";

const Page404 = () => {
  return (
    <div className="mt-5 flex flex-col items-center gap-5">
      <img src={Error404} alt="Error404-img" className="w-[20rem]" />
      <p>This requested URL was not found on this server.</p>
      <NavLink
        to="/"
        className="p-3 inline-flex gap-2 items-center text-blue-700 border border-slate-400 hover:border-slate-600"
      >
        <BsArrowLeft /> Return to Dashboard
      </NavLink>
    </div>
  );
};

export default Page404;
