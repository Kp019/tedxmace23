import React from 'react'
import "./speaker.css"


const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
          'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
          name: 'Ted Fox',
          email: 'ted.fox@example.com',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
  ]



function Speakers() {
  return (
    <div className='mx-5 sm:mx-16 lg:mx-48 '>
        <h3 className='flex justify-center text-white text-5xl'>SPEAKERS</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center m-3">
        {people.map((person) => (
          <li key={person.email} className=" group relative flex flex-col m-5 bg-slate-900 rounded-md overflow-hidden ">
            <img className=" h-72 w-50 scale-125 rounded-md group-hover:scale-100 group-hover:duration-200" src={person.image} alt="" />
            <svg className="h-5 w-5 text-white absolute right-0 z-10 m-2 group-hover:text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
            </svg>

            <div className='absolute z-10 bottom-2 left-5'>
              <h4 className="text-white scale-105 translate-y-40 group-hover:translate-y-0 group-hover:duration-500">{person.name}</h4>
              <p className=' text-gray-300 translate-y-40 group-hover:translate-y-0 group-hover:duration-500'>software engineer</p>
            </div>
            <div className=' -z-0 triangle bottom-40 -right-5 translate-y-0 group-hover:translate-y-96 group-hover:-bottom-8  group-hover:duration-700 group-hover:rotate-6'>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Speakers


