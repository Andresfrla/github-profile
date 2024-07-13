import React from 'react'

const ProfileData = ({userData}) => {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='flex w-fit bg-[#111729] py-4 px-5 rounded-xl ml-10 mt-4 text-[#4A5567]'>
            <h3 className='pr-3'>Followers</h3>
            <span className='text-4xl mt-[-8px] mb-[-10px] font-thin'>|</span>
            <p className='text-[#CDD5E0] pl-3'>{userData.followers}</p>
        </div>
        <div className='flex w-fit bg-[#111729] py-4 px-5 rounded-xl ml-10 mt-4 text-[#4A5567]'>
            <h3 className='pr-3'>Following</h3>
            <span className='text-4xl mt-[-8px] mb-[-10px] font-thin'>|</span>
            <p className='text-[#CDD5E0] pl-3'>{userData.following}</p>
        </div>
        <div className='flex w-fit bg-[#111729] py-4 px-5 rounded-xl ml-10 mt-4 text-[#4A5567]'>
            <h3 className='pr-3 '>Location</h3>
            <span className='text-4xl mt-[-8px] mb-[-10px] font-thin'>|</span>
            <p className='text-[#CDD5E0] pl-3'>{userData.location}</p>
        </div>
    </div>
  )
}

export default ProfileData