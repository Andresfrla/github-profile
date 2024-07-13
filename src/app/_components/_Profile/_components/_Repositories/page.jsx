import React, { useState, useEffect } from 'react';
import MITIcon from "../../../../../../public/Chield_alt.svg";
import Fork from "../../../../../../public/Nesting.svg";
import Star from "../../../../../../public/Star.svg";
import Image from 'next/image';

const Repositories = ({ userData }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(userData.repos_url)
      .then(response => response.json())
      .then(data => {
        setRepos(data);
        setLoading(false); 
      });
  }, [userData.repos_url]);

  const calculateDaysSinceUpdate = (updatedAt) => {
    const updatedDate = new Date(updatedAt);
    const currentDate = new Date();
    const timeDifference = currentDate - updatedDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };

  return (
    <div className='bg-[#20293A]'>
      <h2 className='text-large mt-8 ml-16'>
        <a href={userData.html_url}>
          {userData.name}
        </a>
      </h2>
      <p className='text-[#CDD5E0] font-extralight text-title ml-16 mt-3'>{userData.bio}</p>
      <ul>
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} />
          ))
        ) : (
          repos.slice(0, 5).map(repo => (
            <div key={repo.id} className='bg-gradient-to-r from-[#121729] to-[#1D1B47] mt-9 p-5 mx-12 rounded-xl space-y-6'>
              <h4 className='text-title'>
                <a href={repo.html_url}>
                  {repo.name}
                </a>          
              </h4>
              <p className='text-[#CDD5E0] font-extralight text-body'>{repo.description}</p>
              <div>
                <span className='flex flex-row space-x-4'>
                  {repo.license &&
                    <div className='flex flex-row font-normal text-[#919DB1] space-x-1'>
                      <Image
                        width={24}
                        height={24}
                        src={MITIcon}
                        alt='MIT License'
                      />
                      <p>MIT</p>
                    </div>
                  }
                  <div className='flex flex-row font-normal text-[#919DB1] space-x-1'>
                    <Image
                      width={24}
                      height={24}
                      src={Fork}
                      alt='Fork logo'
                    />
                    <p>{repo.forks_count}</p>
                  </div>
                  <div className='flex flex-row font-normal text-[#919DB1] space-x-1'>
                    <Image
                      width={24}
                      height={24}
                      src={Star}
                      alt='Star logo'
                    />
                    <p>{repo.stargazers_count}</p>
                  </div>
                  <div className='flex flex-row font-light text-[#919DB1]'>
                    <p>
                      updated {calculateDaysSinceUpdate(repo.updated_at)} days ago
                    </p>
                  </div>
                </span>
              </div>
            </div>
          ))
        )}
      </ul>
      <div className='flex justify-center mt-8'>
        <a href={`https://github.com/${userData.login}?tab=repositories`} className='text-[#919DB1] mb-20 mt-5 hover:underline'>
          View all repositories
        </a>
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className='bg-gradient-to-r from-[#121729] to-[#1D1B47] mt-9 p-5 mx-12 rounded-xl space-y-6 animate-pulse'>
      <div className='h-6 bg-gray-700 rounded w-3/4'></div>
      <div className='h-4 bg-gray-700 rounded w-5/6'></div>
      <div className='flex space-x-4'>
        <div className='h-4 bg-gray-700 rounded w-12'></div>
        <div className='h-4 bg-gray-700 rounded w-8'></div>
        <div className='h-4 bg-gray-700 rounded w-8'></div>
      </div>
    </div>
  );
};

export default Repositories;



