'use client'

import { useState } from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center gap-2.5 bg-[#64677c] p-2.5 rounded-lg w-max">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="bg-transparent border-none text-text outline-none"
      />
    </div>
  );
};

export default Search;
