import Image from 'next/image';
import React from 'react';
import SearchIcon from '/public/Search.svg';

const SearchBar = () => {
  return (
    <div className='relative mt-8 rounded-xl bg-[#20293A] h-14 w-3/4 items-center'>
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
      />
    </div>
  );
};

export default SearchBar;
