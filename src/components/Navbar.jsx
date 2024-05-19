import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import Swal from "sweetalert2"; // Import SweetAlert
import Button from "../layout/Button";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const displayLoginAlert = () => {
    Swal.fire({
      title: "Login ",
      text: "Fitur login masih dalam pengembangan.",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Navbar Content */}
      <div className="bg-white shadow-md">
        <div className="flex items-center justify-between p-4 md:px-32 px-4">
          <div className="flex items-center">
            <span className="mr-2">
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold">Saung Kuring</h1>
          </div>
          {/* Desktop Navbar Links */}
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>
            {/* Dropdown Menu */}
            <div className="relative group">
              <div className="flex items-center gap-1">
                <span className="hover:text-brightColor transition-all cursor-pointer">
                  Makanan
                </span>
              </div>
              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="kadaharan"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                  >
                    Utama
                  </Link>
                </li>
                {/* "Cuaca Panas" with SweetAlert */}
                <li
                  onClick={() =>
                    Swal.fire(
                      "Coming Soon!",
                      "Fitur ini masih dalam pengembangan.",
                      "info"
                    )
                  }
                  className="cursor-pointer"
                >
                  Cuaca Panas
                </li>
                {/* "Cuaca Dingin" with SweetAlert */}
                <li
                  onClick={() =>
                    Swal.fire(
                      "Coming Soon!",
                      "Fitur ini masih dalam pengembangan.",
                      "info"
                    )
                  }
                  className="cursor-pointer"
                >
                  Cuaca Dingin
                </li>
              </ul>
            </div>
            {/* Other Navbar Links */}
            <Link
              to="lokasi"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Tempat Makan
            </Link>
            <Link
              to="rerencangan"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            {/* Login Button */}
            <div
              className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full cursor-pointer"
              onClick={displayLoginAlert}
            >
              Login
            </div>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="kadaharan"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Makanan
          </Link>
          <Link
            to="lokasi"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Tempat Makan
          </Link>
          <Link
            to="rerencangan"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Button
            onClick={displayLoginAlert}
            className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full cursor-pointer"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
