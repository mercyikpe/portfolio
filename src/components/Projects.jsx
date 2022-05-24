import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'

function Projects() {
  return (
    <div name='projects' className='md:h-screen w-full bg-blue-950 text-gray-300'>
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
            <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</h2>
                <p className='py-6'>// There are some projects I worked on</p>
            </div>

            {/* Card Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/* Grid-item */}
                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}



                        <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                            <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url('https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')`}}></div>

                            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
                                
                                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                    <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                                    <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                                </div>
                            </div>
                        </div>



                     {/* <div className='opacity-0 group-hover:opacity-100 hidden'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            VueJS | Tailwind CSS
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="" className=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>  */}
                </div>

                <div style={{backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="" className=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="" className=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="" className=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="" className=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="" className=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-200 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects