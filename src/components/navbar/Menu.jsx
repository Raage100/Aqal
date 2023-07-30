
import React from 'react'
import { useState } from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'
import {GiHamburgerMenu} from 'react-icons/gi'

const Menu = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);

  const toggleMenuItems = () => {
    setShowMenuItems((prevState) => !prevState);
  };

  return (
    <div className="flex flex-row items-center gap-3 ">
      <div className="border-r-[1px] border-gray-300">
        <Logo />
      </div>

      {/* Hamburger menu icon for small devices */}
      <div className="md:hidden">
        <GiHamburgerMenu size={24} onClick={toggleMenuItems} />
      </div>
      {
        showMenuItems && (
          <p>Hello</p>
        )
      }

      {/* Menu items for small devices */}
{/*      {showMenuItems && (
        <div className="md:hidden border border-red-500 top-[70px] w-full absolute items-center flex flex-col">
          <MenuItem label="Home" />
          <MenuItem label="About" />
          <MenuItem label="Contact" />
        </div>
      )}
*/}
      {/* Menu items for desktop */}
      <div className="hidden md:flex flex-row">
        <MenuItem label="Home" />
        <MenuItem label="About" />
        <MenuItem label="Contact" />
      </div>
    </div>
  );
};

export default Menu;