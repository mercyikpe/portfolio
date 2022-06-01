import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='bg-blue-950 w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            
            <h1 className='text-3xl sm:text-4xl font-bold text-[#ccd6f6]'>Mercy Ikpe</h1>

            <h2 className='text-2xl sm:text-3xl font-bold text-[#8892b0] mt-2'>Software Developer</h2>

            <p className='text-[#8892b0] py-4 max-w-[700px] text-base'>
            I'm a seasoned Software Developer with a focus on Front End Development. I specialize in building exceptional user experience by building responsive, secure and accessible web applications through efficient development, proactive feature optimization, and debugging.
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