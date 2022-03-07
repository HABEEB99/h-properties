import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import millify from 'millify';
import { MdBed, MdVerifiedUser } from 'react-icons/md';
import { GiBathtub } from 'react-icons/gi';
import { BsGridFill } from 'react-icons/bs';
import { data } from 'autoprefixer';

const Property = ({
  data: {
    area,
    agency,
    isVerified,
    externalId,
    price,
    title,
    rooms,
    baths,
    coverPhoto,
    rentFrequency,
  },
}) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
      <div className="w-[32.5%] h-[50vh] flex flex-col py-2 items-center rounded-lg bg-header shadow-2xl mt-4 mr-2">
        <h2 className='mb-2 font-bold text-gray-500 text-lg'>{title.length > 30 ? `${title.substring(0, 30)}....` : title}</h2>

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
            <GiBathtub className="text-btn ml-1"  />
          </div>
          <span className="text-logo mx-2 font-bold">|</span>
          {millify(area)} sqft <BsGridFill className="text-btn ml-1" />
        </div>

        {/*   <Image src={agency?.logo?.url} width={80} height={20} alt="logo" />*/}
      </div>
    </Link>
  );
};

export default Property;
