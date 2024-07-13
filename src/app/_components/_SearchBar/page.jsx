"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import SearchIcon from '/public/Search.svg';

const SearchBar = ({ onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    onSearchTermChange(event.target.value);
  }

  return (
    <div className='relative mt-8 rounded-xl bg-[#20293A] h-14 w-3/4 md:w-5/12 items-center'>
      <div className='absolute left-0 top-0 h-full flex items-start pl-4 mt-2 pt-2'>
        <Image 
          width={24}
          height={24}
          src={SearchIcon}
          alt="Search"
        />
      </div>
      <input
        type="text"
        placeholder="username"
        className='pl-14 pt-3 bg-transparent w-full h-10 focus:outline-none'
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
};

export default SearchBar;