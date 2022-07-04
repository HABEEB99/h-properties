import React, { useState } from 'react';
import { SiHomeadvisor } from 'react-icons/si';
import NavItem from './NavItem';
import { FaHome, FaKey, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { BsPersonCircle } from 'react-icons/bs';
import MobileNav from '../mobile-nav/MobileNav';

const Header = () => {
	const [openMobileNav, setOpenMobileNav] = useState(false);
	const handleMobileNav = () => {
		setOpenMobileNav(!openMobileNav);
	};
	return (
		<header className="bg-header h-[8vh] w-screen px-3 md:px-12 lg:px-32 flex items-center justify-between">
			<div className="flex items-center">
				<SiHomeadvisor className="font-bold text-4xl text-logo" />
				<h1 className="font-bold text-logo text-xl hidden md:block">
					HBO-PROPERTIES
				</h1>
			</div>

			<nav className="lg:flex lg:items-center hidden lg:block">
				<NavItem path="/" title="Home" Icon={FaHome} />
				<NavItem path="/search" title="Search" Icon={FaSearch} />
				<NavItem path="/search?purpose=for-sale" title="Buy" Icon={FaKey} />
				<NavItem
					path="/search?purpose=for-rent"
					title="Rent"
					Icon={GiReceiveMoney}
				/>
			</nav>

			<div className="flex items-center space-x-2">
				<div className="">
					<BsPersonCircle className="text-3xl font-bold text-green-300" />
				</div>

				<div className="block lg:hidden">
					{!openMobileNav ? (
						<FaBars
							className="text-4xl text-btn font-bold hover:text-green-500"
							onClick={handleMobileNav}
						/>
					) : (
						<FaTimes
							className="text-4xl text-btn font-bold hover:text-red-500"
							onClick={handleMobileNav}
						/>
					)}
				</div>
			</div>
			<MobileNav openMobileNav={openMobileNav} />
		</header>
	);
};

export default Header;
