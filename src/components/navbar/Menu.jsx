
import React from 'react'
import { useState } from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'
import {GiHamburgerMenu} from 'react-icons/gi'
import useSideMenuModal from '../../hooks/useMenuModal'
import {GoChevronDown} from 'react-icons/go'
import {FiMenu} from 'react-icons/fi'


const Menu = () => {
  
   const menuModal = useSideMenuModal() 
  
  return (
    <div className="flex flex-row items-center gap-3 ">
      <div className="border-r-[1px] border-gray-300">
        <Logo />
        
      </div>

      {/* Hamburger menu icon for small devices */}
      
      <button className='md:hidden' onClick={menuModal.onOpen}><FiMenu size={30}/></button>
     

      {/* Menu items for desktop */}
      <div className="hidden md:flex flex-row">
        <MenuItem label="Buy" icon={<GoChevronDown className='inline-block ml-0.5'/>} style={"px-3 py-2 hover:bg-gray-200  transition cursor-pointer"}/>
        <MenuItem label="Sell" icon={<GoChevronDown className='inline-block ml-0.5'/>}  />
        <MenuItem label="Commerical"  icon={<GoChevronDown className='inline-block ml-0.5'/>} />
        <MenuItem label="Find agent" />
      </div>
    </div>
  );
};

export default Menu;