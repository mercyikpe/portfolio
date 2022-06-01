import React from 'react'
import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import GithHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Bitbucket from '../assets/bitbucket.svg'
import GitLab from '../assets/GitLab.svg'
import Vue from '../assets/Vue.svg'
import Bootstrap from '../assets/Bootstrap.svg'
import Windi from '../assets/windi.svg'

function Skills() {
  return (
    <div name='skills' className='md:h-screen pt-24 md:pt-64 w-full bg-blue-950 text-gray-300'>
        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full md:mt-24">
            <div>
                <h2 className='text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>Tools</h2>
                <p className='my-4'>{'//'} These are some technologies I'm familiar with.</p>
            </div>


            <div className='flex flex-wrap'>
                <h5 className='text-xl font-semibold my-6 mr-12 hidden'>HTML</h5>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                        <img className='w-10 mx-auto mb-3' src={HTML} alt="HTML icon" />
                        <p>HTML</p>
                    </div>
                </div>
             </div>


             <div className='flex flex-wrap'>
                <h5 className='text-xl font-semibold my-6 mr-12'>CSS</h5>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                        <img className='w-10 mx-auto mb-3' src={Tailwind} alt="HTML icon" />
                        <p>TailwindCSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                        <img className='w-20 mx-auto mb-3' src={Bootstrap} alt="Bootstrap icon" />
                        <p>Bootstrap CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                        <img className='w-10 mx-auto mb-3' src={Windi} alt="windi icon" />
                        <p>WindiCSS</p>
                    </div>
                </div>
             </div>


             <div className='flex flex-wrap'>
                <h5 className='text-xl font-semibold my-6 mr-12'>JavaScript</h5>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                    <img className='w-10 mx-auto mb-3' src={JavaScript} alt="JavaScript icon" />
                    <p>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                    <img className='w-10 mx-auto mb-3' src={ReactImg} alt="React icon" />
                    <p>React JS</p>
                </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                        <img className='w-20 mx-auto mb-3' src={Vue} alt="VueJS icon" />
                        <p>Vue JS</p>
                    </div>
                </div>
             </div>


             <div className='flex flex-wrap'>
                <h5 className='text-xl font-semibold my-6 mr-12'>Version control</h5>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                    <img className='w-10 mx-auto mb-3' src={GithHub} alt="Github icon" />
                    <p>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                    <img className='w-40 mx-auto mb-3' src={Bitbucket} alt="Bitbucket icon" />
                    {/* <p>Bitbucket</p> */}
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-sm py-4'>
                    <img className='w-40 mx-auto mb-3' src={GitLab} alt="GitLab icon" />
                    {/* <p>GitLab</p> */}
                </div>
                </div>
             </div>


        </div>
    </div>
  )
}

export default Skills