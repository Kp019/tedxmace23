import {React, useEffect} from 'react';
import "./speaker.css";
import kp from '../assets/kp.png';
import {BsLinkedin} from 'react-icons/bs';
import VanillaTilt from 'vanilla-tilt';

const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image: kp,
      description: 'software engineer',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:kp,
      description: 'software engineer',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:kp,
      description: 'software engineer',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:kp,
        description: 'software engineer',
      },
      {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:kp,
        description: 'software engineer',
      },
      {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:kp,
        description: 'software engineer',
      },
      {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:kp,
        description: 'software engineer',
      },
      {
          name: 'Ted Fox',
          email: 'ted.fox@example.com',
          image:kp,
          description: 'software engineer',
        },
  ]



function Speakers() {  
  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll('.speaker-card',{
      max:5,
      speed:20,
      glare: true,
      'max-glare' : 5,
   } ))
  })

  return (
    <div id='speakers' className='mx-5 sm:mx-16 lg:mx-48 '>
        <h3 className='flex justify-center text-white text-5xl mb-20 font-bold'>SPEAKERS</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center m-3">
        {people.map((person) => (
          <li key={person.email} className=" group speaker-card relative flex flex-col m-5 rounded-md overflow-hidden border-2 border-gray-700">
            
            <img className=" h-50 w-50 group-hover:duration-200 group-hover:scale-110 grayscale group-hover:grayscale-0" src={person.image} alt="" />
            <div className='speaker-grad absolute rounded-full -top-20 -left-20 group-hover:duration-200'></div>
            <div className='z-10 p-5 card-content-container flex flex-row border-t-2 border-gray-700'>
              <div>
                <h4 className="text-white group-hover:duration-500 text-xl">{person.name} <br/> <span className='text-gray-300 group-hover:duration-500 text-sm top-20'> {person.description}</span></h4>
              </div>
              <div className='right-0 speaker-icon-container p-5'>
                <BsLinkedin className='right-0 icon group-hover:text-white duration-200'></BsLinkedin>
              </div>
            </div>
            <div className='speaker-grad absolute rounded-full -bottom-20 -right-20 group-hover:duration-500'></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Speakers


