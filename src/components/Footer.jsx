import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Saung Kuring</h1>
          <p className="text-sm">
            Sampurasun rerencangan sadaya, sing sehat nya!
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="https://jabarprov.go.id"
            >
              https://jabarprov.go.id
            </a>
            {/* Add other navigation links */}
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Menu Utama
            </a>
            {/* Add other menu links */}
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="mailto:saungkuring@gmail.com"
            >
              saungkuring@gmail.com
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="tel:+12314151"
            >
              +62857XXXX
            </a>
            <div className="flex gap-2">
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                <BsFacebook />
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                <RiTwitterFill />
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="https://www.instagram.com/saungkuringumn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          &copy; developed by UMN | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
