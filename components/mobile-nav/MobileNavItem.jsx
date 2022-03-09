import React from 'react'
import Link from 'next/link';

const MobileNavItem = ({ title, path, Icon }) => {
    return (
        <Link href={path} passHref>
          <li className="h-[3rem] w-[100%] rounded-lg flex items-center justify-center group cursor-pointer hover:bg-body">
            <Icon className="hidden group-hover:block text-2xl group-hover:animate-bounce text-btn" />
            <h3 className="ml-4 text-gray-400  text-2xl group-hover:font-bold group-hover:text-gray-700">
              {title}
            </h3>
          </li>
        </Link>
      );
}

export default MobileNavItem