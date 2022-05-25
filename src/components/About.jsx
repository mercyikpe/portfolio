import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full md:h-screen bg-blue-950 text-gray-300'>
        <div className="flex flex-col justify-center items-center w-full h-full px-8">
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                
                <div className='sm:text-right pb-8 pl-4-1'>
                    <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>

                <div></div>

            </div>

            <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    <div className='text-2xl sm:text-3xl sm:text-right  font-bold'>
                        <p>Hi, I'm Mercy, nice to meet you. Please take a look around.</p>
                    </div>

                    <div>
                        <p>I am passionate about building excellent softwares. 
                            I specialize in creating User Interaces for clients ranging and individuals, 
                            small-businesses all that way to large enterprise corporations. 
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About