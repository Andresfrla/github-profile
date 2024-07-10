import React, { useState, useEffect } from 'react';

const Repositories = ({ userData }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(userData.repos_url)
     .then(response => response.json())
     .then(data => setRepos(data));
  }, [userData.repos_url]);

  return (
    <div>
      <h2 className='text-large mt-8 ml-16'>{userData.name}</h2>
      <p className='text-[#CDD5E0] font-extralight text-title ml-16 mt-3'>{userData.bio}</p>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;