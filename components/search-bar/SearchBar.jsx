import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { filterData, getFilterValues } from '../../lib/dataToBeFiltered';

const SearchBar = () => {
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // const searchProperties = (filterValues) => {
  //   const path = router.pathname;
  //   const { query } = router;
  //   const values = getFilterValues(filterValues);

  //   values.forEach((item) => {
  //     if (item.value && filterValues?.[item.name]) {
  //       query[item.name] = item.value;
  //     }
  //     router.push({ pathname: path, query: query });
  //   });
  // };

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  useEffect(() => {
    if (searchTerm !== '') {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(
          `${baseUrl}/auto-complete?query=${searchTerm}`
        );
        setLoading(false);
        setLocationData(data?.hits);
      };

      fetchData();
    }
  }, [searchTerm]);
  return (
    <div className="flex items-center gap-8 justify-center p-4 flex-wrap bg-white shadow-2xl rounded-xl">
      {filters.map((filter) => (
        <div key={filter.queryName}>
          <select
            placeholder={filter.placeholder}
            name={filter.placeholder}
            id={filter.placeholder}
            className="w-full md:w-52  h-10 mr-4 text-black bg-header px-2 shadow-lg"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            <option value="">{filter.placeholder}</option>
            {filter?.items?.map((item) => (
              <option
                className="outline-btn"
                value={item.value}
                key={item.value}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
