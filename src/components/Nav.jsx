import React from "react";
import { navLinks } from "../constants";
import { logo } from "../assets/icons";
import Button from "./Button";
import Sticky from "./Sticky";

const Nav = () => {
  return (
    <header className="w-full padding-x py-8 z-10 absolute ">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={logo} alt="Logo" width={346} height={96} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white font-nunito leading-normal text-[18px]
              "
              >
                {item.label}
              </a>
            </li>
          ))}
          <Button label="Free Audit" />
        </ul>
      </nav>
      <Sticky />
    </header>
  );
};

export default Nav;
