import React from 'react';

function Ambassador() {
  return (
    <div id='ambassador' className='flex flex-grow mx-52 m-40 justify-center gap-20 relative'>
      <div className='absolute footer-grad -top-96 right-0'></div>
      <div className=' w-[500px] counter-container rounded-2xl text-white flex justify-center content-center items-center flex-col border-2 border-[#525252] p-10'>
        
            <h1 className='text-5xl'>Become Volunteer</h1>
            <button className='bg-red-500 px-5 py-1 rounded-sm text-lg mt-10'> <a href='./Register_A' target='blank'>let's go</a></button>
        
      </div>
      <div className='w-[500px] counter-container rounded-2xl text-white flex justify-center content-center items-center flex-col border-2 border-[#525252] p-10'>
        <h1 className='text-5xl capitalize'> register now </h1>
        <button className='bg-red-500 px-5 py-1 rounded-sm text-lg mt-10'> <a href='./Preg' target='blank1'>let's go</a></button>
      </div>
    </div>
  )
}

export default Ambassador