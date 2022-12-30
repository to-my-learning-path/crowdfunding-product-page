import React from "react";
import Logo from ".././assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Crowdfund Logo" />
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Discover</a>
          </li>
          <li>
            <a href="">Get Started</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
