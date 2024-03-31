import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../../utils/navbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed customContainer right-0 top-0 w-full left-0 text-action-heading border-b  py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-bold text-3xl">
          PrinoPixel
        </Link>

        <nav className="lg:flex hidden gap-5 items-center text-action-heading font-bold ">
          {navbar.map((item) => {
            return (
              <Link to={item.link} key={item.id} className="">
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className=" lg:hidden  rounded-full p-3 flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:text-gray-500"
          >
            {isMenuOpen ? (
              <img src="/cross.svg" className="text-action-heading" alt="" srcset="" />
            ) : (
              <img
                src="/hambergerMenu.svg"
                alt=""
                className="text-action-heading"
                srcset=""
              />
            )}
          </button>
        </div>

        <div
          className={`px-4 mt-16 h-full flex flex-col items-center justify-center bg-accent-light  ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navbar.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.id}
                className="text-action-heading font-bold  flex flex-col  justify-center items-center gap-32"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
