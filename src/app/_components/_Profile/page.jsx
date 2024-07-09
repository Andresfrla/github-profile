import React, { useState, useEffect } from 'react';
import ProfileData from './_components/_ProfileData/ProfileData';

const Profile = ({ userData }) => {
  const [githubInfo, setGithubInfo] = useState({});

  useEffect(() => {
    const fetchGithubInfo = async () => {
      try {
        const username = userData?.username || 'github'; // Reemplaza 'github' con un usuario por defecto o maneja el caso apropiadamente
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setGithubInfo(data);
      } catch (error) {
        console.log('Error fetching GitHub data:', error);
      }
    };

    fetchGithubInfo();
  }, [userData]);

  return (
    <div className='mt-36 bg-[#20293A] w-full h-screen'>
      <div className='flex'>
        <div className='ml-16'>
        {userData?.avatar_url ? (
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            className='size-28 rounded-2xl'
          />
        ) : (
          githubInfo.avatar_url && (
            <img
              src={githubInfo.avatar_url}
              alt="GitHub User Avatar"
              className='size-28 rounded-2xl'
            />
          )
        )}
        </div>
        <ProfileData userData={userData || githubInfo} /> {/* Pass the appropriate data to ProfileData */}
      </div>
    </div>
  );
};

export default Profile;
