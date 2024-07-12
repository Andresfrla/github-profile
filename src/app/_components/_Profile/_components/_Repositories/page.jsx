import React, { useState, useEffect } from 'react';

const Repositories = ({ userData }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(userData.repos_url)
     .then(response => response.json())
     .then(data => setRepos(data));
  }, [userData.repos_url]);

  console.log(userData.repos_url)


  return (
    <div>
      <h2 className='text-large mt-8 ml-16'>{userData.name}</h2>
      <p className='text-[#CDD5E0] font-extralight text-title ml-16 mt-3'>{userData.bio}</p>
      <ul>
        {repos.slice(0, 5).map(repo => (
          <div>
            <h4 key={repo.id} className='text-title'>{repo.name}</h4>
            <p key={repo.id} className='text-[#CDD5E0] font-extralight text-body'>{repo.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;
