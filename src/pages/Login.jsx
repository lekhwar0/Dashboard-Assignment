import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Footer } from "../components";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-500 h-screen relative">
      <div className="container min-h-screen mx-auto px-6 flex items-center justify-center">
        <div className="bg-white md:w-1/2 lg:w-1/3 p-5 flex flex-col gap-4 rounded-md">
          <h3 className="bg-gray-200 p-3 text-2xl font-medium text-center">
            Login
          </h3>
          <input
            type="email"
            className="p-3 border rounded-md outline-blue-500"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="p-3 border rounded-md outline-blue-500"
            placeholder="Password"
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p>Remember Password</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <NavLink to="/forgot-password" className="text-sm text-blue-500">
              ForgotPassword
            </NavLink>
            <button
              type="button"
              className="bg-blue-500 px-3 py-2 text-white rounded-md hover:bg-blue-600 transition-all duration-500"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </div>
          <hr />
          <NavLink
            to="/register"
            className="bg-gray-200 p-2 text-center border border-t hover:bg-gray-300 transition-all duration-500"
          >
            Need an account? Sign up!
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
