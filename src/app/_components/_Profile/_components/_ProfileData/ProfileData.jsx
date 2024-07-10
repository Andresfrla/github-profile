import React from 'react'

const ProfileData = () => {

  return (
    <div className='flex flex-col'>
        <div className='flex bg-[#111729] py-4 px-5 rounded-xl ml-10 mt-4 text-[#4A5567]'>
            <h3 className='pr-3'>Followers</h3>
            <span className='text-4xl mt-[-8px] mb-[-10px] font-thin'>|</span>
            <p></p>
        </div>
        <div className='flex bg-[#111729] py-4 px-5 rounded-xl ml-10 mt-4 text-[#4A5567]'>
            <h3 className='pr-3'>Following</h3>
            <span className='text-4xl mt-[-8px] mb-[-10px] font-thin'>|</span>
            <p></p>
        </div>
        <div className='flex bg-[#111729] py-4 px-5 rounded-xl ml-10 mt-4 text-[#4A5567]'>
            <h3 className='pr-3 '>Location</h3>
            <span className='text-4xl mt-[-8px] mb-[-10px] font-thin'>|</span>
            <p></p>
        </div>
    </div>
  )
}

export default ProfileData