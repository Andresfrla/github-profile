import React from 'react'

const Profile = ({ userData }) => {
  console.log(userData);

  return (
    <div className='mt-40'>
      {userData && (
        <div>
          <img 
            src={userData.avatar_url} 
            alt="User Avatar" 
            className='size-28'
            />
        </div>
      )}
    </div>
  );
};

export default Profile;