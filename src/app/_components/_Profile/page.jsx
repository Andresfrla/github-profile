import React, { useState, useEffect } from 'react';
import ProfileData from './_components/_ProfileData/ProfileData';
import Repositories from './_components/_Repositories/page';

const Profile = ({ userData }) => {
  const [githubInfo, setGithubInfo] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchGithubInfo = async () => {
      try {
        const username = userData?.login || 'github'; 
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setGithubInfo(data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGithubInfo();
  }, [userData]);

  const profileData = userData?.username ? userData : githubInfo;

  console.log(profileData)
  return (
    <div className='mt-36 bg-[#20293A] w-full h-screen'>
      <div className='flex'>
        <div className='ml-16'>
          {loading ? (
            <SkeletonImage />
          ) : (
            <img
              src={profileData.avatar_url || githubInfo.avatar_url}
              alt="User Avatar"
              className='size-28 rounded-2xl mt-[-60px] border-8 border-[#20293A]'
            />
          )}
        </div>
        <ProfileData userData={profileData} />
      </div>
      <Repositories userData={profileData} />
    </div>
  );
};

const SkeletonImage = () => {
  return (
    <div className='size-28 rounded-2xl mt-[-60px] border-8 border-[#20293A] bg-gray-700 animate-pulse'></div>
  );
};

export default Profile;

