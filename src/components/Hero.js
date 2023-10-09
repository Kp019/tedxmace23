import React from 'react';
import bg from '../assets/bg.png'
import { Button } from 'react-scroll';

function Hero() {
  return (
    <div id='hero' className=' relative w-full h-[100vh] bg-black text-white text-5xl flex justify-center overflow-hidden'>
      <div className='flex justify-center w-full h-auto'>
        <img className='w-full bg-blend-darken' src={bg} alt=''></img>
        <div className='absolute align-middle flex flex-col text-center content-center items-center justify-center m-52 gap-5'>
          <p>tedxmace</p>
          <p className='text-xl'>Inspired yet unusual, it's a space for strong and impactful stories, and off-beat thoughts, connecting you to what's real while taking you too far far away.</p>
          <Button className='bg-red-600 rounded-xl w-40 p-3 text-lg'>Register now</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
