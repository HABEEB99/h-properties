import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<main className="pb-6 overflow-x-hidden px-3 md:px-12 lg:px-32 w-screen bg-body dark:bg-gray-800 mt-[10.2vh]">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
