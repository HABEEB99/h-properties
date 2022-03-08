import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import millify from 'millify';
import { MdBed, MdVerifiedUser } from 'react-icons/md';
import { GiBathtub } from 'react-icons/gi';
import { BsGridFill } from 'react-icons/bs';
// import { data } from 'autoprefixer';
import { motion } from 'framer-motion';

const Property = ({
  data: {
    area,
    agency,
    isVerified,
    externalID,
    price,
    title,
    rooms,
    baths,
    coverPhoto,
    rentFrequency,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <motion.div
        whileHover={{
          scale: [1, 1.4, 1.2],
          rotate: [0, 10, -10, 0],
          filter: [
            'hue-rotate(0) contrast(100%)',
            'hue-rotate(360deg) contrast(200%)',
            'hue-rotate(45deg) contrast(300%)',
            'hue-rotate(0) contrast(100%)',
          ],
          transition: {
            duration: 0.2,
          },
          position: 'relative',
          zIndex: 1,
          background: 'white',
        }}
        className="w-[32.5%] h-[50vh] flex flex-col py-2 items-center rounded-lg bg-header shadow-2xl mt-4 mr-2"
      >
        <h2 className="mb-2 font-bold text-gray-500 text-lg">
          {title.length > 30 ? `${title.substring(0, 30)}....` : title}
        </h2>

        <Image src={coverPhoto.url} alt="home" width={400} height={300} />

        <div className="flex items-center">
          <div>
            {isVerified && <MdVerifiedUser className="font-bold text-logo" />}
          </div>
          <h3 className=" ml-3">
            AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
          </h3>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <h3 className="font-bold">{rooms}</h3>
            <MdBed className="text-btn ml-1" />
          </div>
          <span className="text-logo mx-2 font-bold">|</span>
          <div className="flex items-center">
            <h3 className="font-bold">{baths}</h3>
            <GiBathtub className="text-btn ml-1" />
          </div>
          <span className="text-logo mx-2 font-bold">|</span>
          {millify(area)} sqft <BsGridFill className="text-btn ml-1" />
        </div>

        {/*   <Image src={agency?.logo?.url} width={80} height={20} alt="logo" />*/}
      </motion.div>
    </Link>
  );
};

export default Property;
