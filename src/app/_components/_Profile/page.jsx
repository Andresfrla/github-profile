import React, { useState, useEffect } from 'react';
import ProfileData from './_components/_ProfileData/ProfileData';
import Repositories from './_components/_Repositories/page';

const Profile = ({ userData }) => {
  const [githubInfo, setGithubInfo] = useState({});

  useEffect(() => {
    const fetchGithubInfo = async () => {
      try {
        const username = userData?.login || 'github'; // Reemplaza 'github' con un usuario por defecto o maneja el caso apropiadamente
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setGithubInfo(data);
      } catch (error) {
        console.log('Error fetching GitHub data:', error);
      }
    };

    fetchGithubInfo();
  }, [userData]);

  const profileData = userData?.username ? userData : githubInfo;

  return (
    <div className='mt-36 bg-[#20293A] w-full h-screen'>
      <div className='flex'>
        <div className='ml-16'>
          {profileData.avatar_url ? (
            <img
              src={profileData.avatar_url}
              alt="User Avatar"
              className='size-28 rounded-2xl mt-[-60px] border-8 border-[#20293A]'
            />
          ) : (
            <img
              src={githubInfo.avatar_url}
              alt="GitHub User Avatar"
              className='size-28 rounded-2xl mt-[-60px] border-8 border-[#20293A]'
            />
          )}
        </div>
        <ProfileData userData={profileData} />
      </div>
        <Repositories userData={profileData}/>
    </div>
  );
};

export default Profile;
