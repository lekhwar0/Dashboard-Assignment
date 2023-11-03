import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Footer } from "../components";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-500 h-screen relative">
      <div className="container min-h-screen mx-auto px-6 flex items-center justify-center">
        <div className="bg-white md:w-1/2 lg:w-1/3 p-5 flex flex-col gap-4 rounded-md">
          <h3 className="bg-gray-200 p-3 text-2xl font-medium text-center">
            Create Account
          </h3>
          <div className="flex gap-2">
            <input
              type="text"
              className="w-1/2 p-3 border rounded-md outline-blue-500"
              placeholder="First name"
            />
            <input
              type="text"
              className="w-1/2 p-3 border rounded-md outline-blue-500"
              placeholder="Last name"
            />
          </div>
          <input
            type="email"
            className="p-3 border rounded-md outline-blue-500"
            placeholder="Email Address"
          />

          <div className="flex gap-2">
            <input
              type="password"
              className="w-1/2 p-3 border rounded-md outline-blue-500"
              placeholder="Password"
            />
            <input
              type="text"
              className="w-1/2 p-3 border rounded-md outline-blue-500"
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="button"
            className="bg-blue-500 px-3 py-2 text-white rounded-md hover:bg-blue-600 transition-all duration-500"
            onClick={() => navigate("/login")}
          >
            Create Account
          </button>

          <hr />
          <NavLink
            to="/login"
            className="bg-gray-200 p-2 text-center border border-t hover:bg-gray-300 transition-all duration-500"
          >
            Have an account? Go to login
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
