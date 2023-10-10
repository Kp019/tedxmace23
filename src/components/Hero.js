import React from 'react';
//import bg from '../assets/bg.png';
import { Button } from 'react-scroll';
function Hero() {
  return (
    
    <div id='hero' className=' relative w-full h-[100vh] text-white text-5xl flex justify-center overflow-hidden'>
        <div className='flex w-full h-auto'>
        <iframe title='J' src='https://my.spline.design/lightcubes-0ab28d17347fded031b26f9d3e6083a4/' frameborder='0' width='100%' height='100%'></iframe>
          <div className='absolute align-middle flex flex-col m-52 gap-5'>
            <p>tedxmace</p>
            <p className='text-xl'>Inspired yet unusual, it's a space for strong and impactful stories, and off-beat thoughts, connecting you to what's real while taking you too far far away.</p>
            <Button className='bg-red-600 rounded-xl w-40 p-3 text-lg'>Register now</Button>
          </div>
      </div>
    </div>
  )
}

export default Hero
