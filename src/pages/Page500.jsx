import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Page500 = () => {
  return (
    <div className="mt-5 flex flex-col items-center gap-5">
      <h2 className="text-7xl ">500</h2>
      <p>Internal Server Error</p>
      <NavLink
        to="/"
        className="p-3 inline-flex gap-2 items-center text-blue-700 border border-slate-400 hover:border-slate-600"
      >
        <BsArrowLeft /> Return to Dashboard
      </NavLink>
    </div>
  );
};

export default Page500;
