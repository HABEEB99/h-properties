import React from 'react';
import { SiHomeadvisor } from 'react-icons/si';
import NavItem from './NavItem';
import { FaHome, FaKey, FaSearch } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { BsPersonCircle } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="bg-header h-[8vh] w-screen px-6 md:px-12 lg:px-32 flex items-center justify-between">
      <div className="flex items-center">
        <SiHomeadvisor className="font-bold text-4xl text-logo" />
        <h1 className="font-bold text-logo text-xl">H-Properties</h1>
      </div>

      <nav className="flex items-center">
        <NavItem path="/" title="Home" Icon={FaHome} />
        <NavItem path="/search" title="Search" Icon={FaSearch} />
        <NavItem path="/buy" title="Buy" Icon={FaKey} />
        <NavItem path="/rent" title="Rent" Icon={GiReceiveMoney} />
      </nav>

      <div className=''>
        <BsPersonCircle className='text-3xl font-bold text-green-300'/>
      </div>
    </header>
  );
};

export default Header;
