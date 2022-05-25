import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import GithHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'

function Skills() {
  return (
    <div name='skills' className='md:h-screen pt-24 w-full bg-blue-950 text-gray-300'>
        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full">
            <div>
                <h2 className='text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>Tools</h2>
                <p className='my-4'>// These are some technologies I'm familiar with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                    <img className='w-20 mx-auto' src={GithHub} alt="Github icon" />
                    <p>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p>Tailwind</p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Skills