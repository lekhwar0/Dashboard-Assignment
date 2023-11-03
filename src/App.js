import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  StaticNavigation,
  SidenavLight,
  Login,
  Register,
  ForgotPassword,
  Page401,
  Page404,
  Page500,
  Charts,
  Tables,
} from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/static-navigation" element={<StaticNavigation />} />
        <Route path="/sidenav-light" element={<SidenavLight />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/page-401" element={<Page401 />} />
        <Route path="/page-404" element={<Page404 />} />
        <Route path="/page-500" element={<Page500 />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
