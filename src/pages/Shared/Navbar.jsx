import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-10">
      <Link to="/">PrinoPixel</Link>
      <ul className="flex items-center justify-between gap-10">
        <Link to="/careers">
          <li>Career</li>
        </Link>
        <Link to="/about">
          <li>AboutUs</li>
        </Link>
        <Link to="/contact">
          <li>ContactUs</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
