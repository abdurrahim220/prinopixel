import React from "react";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <div className="md:min-h-[calc(100vh-73px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
