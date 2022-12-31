import React, { useState } from "react";
import Logo from ".././assets/images/logo.svg";
import CloseIcon from ".././assets/images/icon-close-menu.svg";
import OpenIcon from ".././assets/images/icon-hamburger.svg";

import { Backdrop, Divider, useMediaQuery } from "@mui/material";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <header className=" md:px-12 lg:px-16 flex justify-between p-8 relative">
      <img className=" object-contain z-10" src={Logo} alt="Crowdfund Logo" />
      <button className=" z-10 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <img src={CloseIcon} alt="" /> : <img src={OpenIcon} />}
      </button>
      {isMobile ? (
        <Backdrop
          className=" absolute min-h-screen z-10"
          open={isOpen}
          onClick={() => setIsOpen(false)}
        >
          <nav
            className={` ${
              isOpen ? "" : "hidden"
            } bg-[#f8fafc] rounded-lg w-full mx-8 -mt-80 `}
          >
            <ul className=" text-black font-500">
              <li className=" px-6 py-6">
                <a href="">About</a>
              </li>
              <Divider />
              <li className=" px-6 py-6">
                <a href="">Discover</a>
              </li>
              <Divider />
              <li className=" px-6 py-6">
                <a href="">Get Started</a>
              </li>
            </ul>
          </nav>
        </Backdrop>
      ) : (
        <nav>
          <ul className=" flex justify-between gap-4 text-[#fff]">
            <li className="">
              <a href="#">About</a>
            </li>
            <Divider />
            <li className=" ">
              <a href="#">Discover</a>
            </li>
            <Divider />
            <li className=" ">
              <a href="#">Get Started</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
