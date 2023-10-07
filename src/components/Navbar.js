import React, { useState } from 'react';
import {Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from "react-scroll";

function Navbar() {
  let Links =[
    {name:"HOME",link:"hero"},
    {name:"ABOUT",link:"about"},
    {name:"SPEAKERS",link:"speakers"},
    {name:"CONTACT",link:"footer"},
  ];
  let [open, setOpen] =useState(false);

return (
    <div className='shadow-md w-full fixed top-0 left-0 z-30'>
       <div className='md:flex items-center justify-between bg-black py-4 md:px-20 px-7 md:py-6'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <span className='text-red-500'>TEDx MACE</span>
        </div>
        {/* Menu icon */}
        <div onClick={()=>setOpen(!open)} className='absolute text-white  right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
            {
                open ? <XMarkIcon/> : <Bars3BottomRightIcon />
            }
        </div>
        {/* linke items */}
        <ul className={`bg-[#000] md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px] '}`}>
            {
                Links.map((link) => (
                <li className='md:ml-8 md:my-0 my-7 font-semibold cursor-pointer'>
                    <Link activeClass="active" className='text-white hover:text-red-500 duration-500' to={link.link} spy={true} smooth={true} offset={-100} duration={500}> {link.name} </Link>
                </li>))
            }
            <button className='btn text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static hover:bg-transparent border-2 border-red-600  hover:bg-red-600'>REGISTER</button>
        </ul>
        {/* button */}
       </div>
    </div>
);
}

export default Navbar


 