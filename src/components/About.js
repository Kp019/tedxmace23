import React from 'react'
//import kochi from "../assets/kochi_img.png"
import "./speaker.css"

function About() {
  return (
    
    <div className='mb-56 about-container about-angled  overflow-hidden text-white '>
      <div className='about-gradient '>
      <div className='mx-20 p-20 '>      
        <div className='overflow-hidden px-20 pt-32 mb-20 flex flex-row flex-grow gap-36 rounded-2xl justify-center items-center '>
            <h1 className='text-white text-4xl font-bold z-10'>Hi, We are TEDxMACE.</h1>
            <p className='z-10'> 
                All lives are stories. Stories told in first person or by an onlooker. 
                We are one such narrator of snippets of the lives of unconventionally extraordinary individuals. 
                Experience that can subtly enlighten, prompt silent introspection, and bring you the world not as 
                it is but as what it could be. This is our fifth attempt at bringing you stimulating, interesting conversations 
                in little communities: our journey into the future in the company of those making it.
            </p>
        </div>
        <div className=' px-20 mb-32 rounded-2xl flex flex-row flex-grow gap-10'>
            <div>
                <h1 className='text-white text-4xl font-bold pb-5'>About TED</h1>
                <p>
                    A story like no other deserves a narrator like no other. TED is a non-profit global community envisioning the tagline 
                    'ideas worth spreading' through a series of talks spanning 18 minutes -- short, powerful conversations developing narratives 
                    on diverse topics sprawling Technology, Entertainment, Design, and pretty much everything that's beyond and under the sun. 
                    Annually hosted twice, the narratives by leading changemakers, thinkers, and doers are recorded and later 
                    made available for free.
                </p>
            </div>
            <div>
                <h1 className='text-white text-4xl font-bold pb-5'>About TEDx</h1>
                <p>
                TEDx talks are conversations that aim at developing a local narrative while maintaining the underlying vision of TED. While TED takes more of a global approach, TEDx is a space that celebrates local voices. It's been the force that has taken TED across the planet and seeded all of these communities. Licensed from TED, it offers a wholesome experience to its speakers and attendees, a global stage for local dialogues. These conversations are recorded and later made available for free in TEDx handles.
                </p>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About