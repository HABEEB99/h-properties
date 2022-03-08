import React from 'react';
import { useRouter } from 'next/router';
import SearchBar from '../components/search-bar/SearchBar';
import { fetchApi, baseUrl } from '../lib/fetchApi';
import Property from '../components/property/Property';

const Search = ({ properties }) => {
  const router = useRouter();
  return (
    <div className="px-6 md:px-12 lg:px-32 bg-body w-screen">
      <h2>Properties {router.query.purpose}</h2>
      <SearchBar />

      <div className=" flex items-center justify-around flex-wrap">
        {properties.map((property) => (
          <Property data={property} key={property.id} />
        ))}
      </div>
    </div>
  );
};

export default Search;

export const getServerSideProps = async ({ query }) => {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalIDs = query.categoryExternalIDs || '4';

  const request = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalIDs=${categoryExternalIDs}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: request?.hits,
    },
  };
};
