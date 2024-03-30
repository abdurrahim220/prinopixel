import React from "react";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import {Outlet} from 'react-router-dom'

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
