import React from "react";
import logo from "./../../../src/images/logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      height="50"
      width="50"
      alt="logo"
      className="md:block cursor-pointer pr-2"
    />
  );
};

export default Logo;
