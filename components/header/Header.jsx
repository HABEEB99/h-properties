import React, { useState } from 'react';
import { SiHomeadvisor } from 'react-icons/si';
import NavItem from './NavItem';
import { FaHome, FaKey, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { BsFillMoonFill, BsFillSunFill, BsPersonCircle } from 'react-icons/bs';
import MobileNav from '../mobile-nav/MobileNav';
import { useTheme } from 'next-themes';

const Header = () => {
	const { theme, setTheme, systemTheme } = useTheme();

	const [darkMode, setDarkMode] = useState(false);
	const handleDarkMode = () => setDarkMode(!darkMode);

	const themeToggler = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme;
		if (currentTheme === 'dark') {
			return (
				<div onClick={() => setTheme('light')} className="">
					<button className="p-2  bg-btn hover:bg-blue-400 rounded-lg text-xl text-yellow-400 hover:text-yellow-200">
						<BsFillSunFill />
					</button>
				</div>
			);
		} else {
			return (
				<div onClick={() => setTheme('dark')} className="">
					<button className="p-2   bg-btn hover:bg-blue-400 rounded-lg text-xl text-gray-300 hover:text-gray-200">
						<BsFillMoonFill />
					</button>
				</div>
			);
		}
	};
	const [openMobileNav, setOpenMobileNav] = useState(false);
	const handleMobileNav = () => {
		setOpenMobileNav(!openMobileNav);
	};
	return (
		<header className="bg-header fixed top-0 z-10 dark:bg-gray-400 h-[8vh] w-screen px-3 md:px-12 lg:px-32 flex items-center justify-between">
			<div className="flex items-center">
				<SiHomeadvisor className="font-bold text-4xl text-logo" />
				<h1 className="font-bold text-logo text-xl hidden md:block">
					HBO-PROPERTIES
				</h1>
			</div>

			<nav className="lg:flex lg:items-center hidden">
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
				<div className="">{themeToggler()}</div>

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
