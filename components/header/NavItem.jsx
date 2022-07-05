import Link from 'next/link';
import React from 'react';

const NavItem = ({ path, title, Icon }) => {
	return (
		<Link href={path} passHref>
			<div className="flex items-center group cursor-pointer ml-10">
				<Icon className="font-bold text-xl text-btn hidden group-hover:block group-hover:animate-bounce" />
				<h2 className="text-lg text-gray-400 group-hover:text-gray-700 dark:text-gray-200 dark:group-hover:text-gray-100 font-bold">
					{title}
				</h2>
			</div>
		</Link>
	);
};

export default NavItem;
