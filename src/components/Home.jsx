import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='bg-blue-950 w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            
            <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Mercy Ikpe</h1>

            <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0] mt-2'>Front-end Engineer</h2>

            <p className='text-[#8892b0] py-4 max-w-[700px] text-base'>I'm a full-stack developer specializing in building exceptional user expereince. 
            Currently focused on builing responsive full-stack web applications.
            </p>


            <div>
            
            <Link to="projects" smooth={true} duration={500}>
            <button className='text-white border-2 group py-2 my-2 px-6 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Projects 
              <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
              </span>  
              </button>
            </Link>
        </div>
      </div> 
    </div>
  )
}

export default Home