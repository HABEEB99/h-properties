import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import millify from 'millify';
import { MdBed, MdVerifiedUser } from 'react-icons/md';
import { GiBathtub } from 'react-icons/gi';
import { BsGridFill, BsArrow90DegDown } from 'react-icons/bs';
import {ImCheckmark} from 'react-icons/im'
import { baseUrl, fetchApi } from '../../lib/fetchApi';
import ImageCarousel from '../../components/image-carousel/ImageCarousel';

const PropertyFullDetails = ({
  detailedProperty: {
    amenities,
    price,
    rentFrequency,
    agency,
    area,
    rooms,
    title,
    isVerified,
    description,
    baths,
    purpose,
    type,
    furnishingStatus,
    photos,
  },
}) => {
  return (
    <div className="flex flex-col  px-6 md:px-12 lg:px-32">
      {photos && <ImageCarousel images={photos} />}

      <div className="flex items-center mt-2">
        <div>
          {isVerified && <MdVerifiedUser className="font-bold text-logo" />}
        </div>
        <h3 className=" ml-3 text-gray-600 font-bold">
          AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
        </h3>
      </div>

      <div className="flex items-center justify-start mt-2">
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

      <div className="mt-2">
        <h1 className="text-2xl text-gray-600 font-bold">{title}</h1>
        <span className="text-lg text-gray-500">{description}</span>
      </div>

      <div className="mt-2 flex flex-col">
        <div className="flex items-center">
          <h2 className="text-lg text-gray-600 font-bold">
            TYPE <span className="ml-2">:</span>
          </h2>
          <h2 className="ml-4 text-lg text-gray-500">{type.toUpperCase()}</h2>
        </div>

        <div className="flex items-center mt-1">
          <h2 className="text-lg text-gray-600 font-bold">
            PURPOSE <span className="ml-2">:</span>
          </h2>
          <h2 className="ml-4 text-lg text-gray-500">
            {purpose.toUpperCase()}
          </h2>
        </div>

        {furnishingStatus && (
          <div className="flex items-center mt-1">
            <h2 className="text-lg text-gray-600 font-bold">
              FURNISHING STATUS <span className="ml-2">:</span>
            </h2>
            <h2 className="ml-4 text-lg text-gray-500">
              {furnishingStatus.toUpperCase()}
            </h2>
          </div>
        )}

        <div className="mt-1">
          <h2>
            {amenities.length && (
              <div className="flex items-center font-bold text-xl">
                <BsArrow90DegDown />
                <h2 className="text-lg text-gray-600 font-bold">AMENITIES</h2>
              </div>
            )}
          </h2>
          <div>
            {amenities.map((item) =>
              item.amenities.map((amenity) => (
                <div key={amenity.text} className="flex items-center">
                  <ImCheckmark className='text-btn'/>
                  <h2 className='ml-1 text-lg text-gray-500'>{amenity.text}</h2>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFullDetails;

export const getServerSideProps = async ({ params: { id } }) => {
  const request = await fetchApi(
    `${baseUrl}/properties/detail?externalID=${id}`
  );
  return {
    props: {
      detailedProperty: request,
    },
  };
};
