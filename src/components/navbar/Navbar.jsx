import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm  h-[70px] ">
      <div
        className="
       py-4
       border-b-[1px]
       h-[70px]
      


     "
      >

        <Container>
          <div
          className="
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0
          
          
          "
          
          >
           <Menu/>
           <MenuItem label="Login" />


          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
