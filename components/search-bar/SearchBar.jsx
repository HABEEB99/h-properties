import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { filterData, getFilterValues } from '../../lib/dataToBeFiltered';

const SearchBar = () => {
  const router = useRouter();
  const [filters, setFilters] = useState(filterData);
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      query[item.name] = item.value;
      router.push({ pathname: path, query });
    });
  };
  return (
    <div className="flex items-center gap-8 justify-center p-4 flex-wrap bg-white shadow-2xl rounded-xl">
      {filters.map((filter) => (
        <div key={filter.queryName}>
          <select
            placeholder={filter.placeholder}
            name={filter.placeholder}
            id={filter.placeholder}
            className="w-52  h-10 mr-4 text-black bg-header px-2 shadow-lg"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
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
