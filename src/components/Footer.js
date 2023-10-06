import React from 'react';
import {AiFillPhone} from 'react-icons/ai';
import{BiLogoGmail} from 'react-icons/bi';
import {MdLocationPin} from 'react-icons/md';
//import asset from '../assets/world.png';
import {BsInstagram, BsTwitter, BsFacebook, BsLinkedin} from 'react-icons/bs';


function Footer() {
  return (
    <div className='relative'>
      <div className='img_container'>      
        <img alt='' className='absolute'></img>
      </div>
      <div className='contact flex justify-center gap-20 pt-52 pb-40'>
      
      <div className=''>
        <h1 className='text-white text-xl'>LETS MEET AT THE<br/> <span className='text-red-600 font-bold text-8xl tracking-widest'>VENUE</span></h1>
        <div className='pt-10'>
          <div  className='text-white flex flex-row align-middle gap-5 py-5'>
              <AiFillPhone className='text-3xl'></AiFillPhone>
              <p className='text-xl'>+91 8330859663</p>
          </div>
          <div className='text-white flex flex-row align-middle gap-5 py-5'>
            <BiLogoGmail className='text-3xl'></BiLogoGmail>
            <div className='text-xl'>krishnaprasadr666@gmail.com</div>
          </div>
          <div className='text-white flex flex-row align-middle gap-5 py-5'>
            <MdLocationPin className='text-3xl'></MdLocationPin>
            <div className='text-xl'>
              Mar Athanasius College of Engineering<br/>
              College Road,
              Kothamangalam 686666, Kerala
            </div>
          </div>
        </div>
      </div>
      <div className='z-10'>
      <iframe className='rounded-xl' title='mps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5522076133775!2d76.61551147848766!3d10.053760664410298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e6154a2133e5%3A0x2c26b2d532bb30ea!2sMar%20Athanasius%20College%20of%20Engineering%20-%20Kothamangalam!5e0!3m2!1sen!2sin!4v1696482319402!5m2!1sen!2sin" width="600" height="450"  loading="lazy"></iframe>
      </div>
    </div>
    <div className='pb-10 mx-52'>
      <div className='text-white mb-5 mx-5'>
        <div className='text-3xl'>
          <p>TEDxMACE</p>
          <div className='text-sm flex gap-5 mt-3'>
            <BsInstagram></BsInstagram>
            <BsTwitter></BsTwitter>
            <BsFacebook></BsFacebook>
            <BsLinkedin></BsLinkedin>
          </div>
        </div>
        <div className='flex justify-end gap-5'>
          <p>Home</p>
          <p>About</p>
          <p>Ambassador</p>
          <p>contact</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='footer-line'></div>
      </div>
      <div className='flex justify-center text-center'>
        <p className='text-white'> ©Copyright TEDxMACE. All Rights Reserved
        <br/>Made with react and tailwind by <span className='text-red-600'>Krishnaprasad</span></p>
      </div>
    </div>
    </div>
  )
}

export default Footer
