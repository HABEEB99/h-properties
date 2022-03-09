import React from 'react';
import { FaTimes, FaHome} from 'react-icons/fa';
import { FaKey, FaSearch } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import MobileNavItem from './MobileNavItem';

const MobileNav = ({ openMobileNav }) => {
  return (
    !openMobileNav && (
      <nav className=" lg:hidden rounded-lg shadow-2xl flex items-center z-[999] justify-around absolute top-16 bg-header right-6 md:right-16 w-72 h-96 flex-col  p-4 ">
        <MobileNavItem title="Home" path="/" Icon={FaHome} />
        <MobileNavItem title="Search" path="/search" Icon={FaSearch} />
        <MobileNavItem
          path="/search?purpose=for-sale"
          title="Buy"
          Icon={FaKey}
        />
        <MobileNavItem
          path="/search?purpose=for-rent"
          title="Rent"
          Icon={GiReceiveMoney}
        />
      </nav>
    )
  );
};

export default MobileNav;
