import React from "react";
import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container flex py-8 flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
