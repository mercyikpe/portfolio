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
                        <p>Mercy Ikpe is a Software engineer based in Uyo, Nigeria.</p>
                        <br></br>
                        <p>As a Software Engineer familiar with frontend technologies, I focus majorly on the frontend side of applications, with professional experience in JavaScript and it's frameworks  React JS and Vue JS.  I also enjoy building responsive, secure and accessible applications.</p>
                        <br></br>
                        <p>She is the Co-founder of <a href="https://phpsandbox.io" target="_blank" rel="noreferrer" className='underline decoration-pink-600 decoration-double underline-offset-4'>PHPSandbox</a>, an Online development environment for building applications in PHP.</p>
                        <br></br>
                        <p>
                            Outside of Software Development, Mercy speaks regularly at technology conferences across Africa. She is an Ex-Google Student Developer Lead, Ex-organiser of NodeJS Akwa Ibom, and also a member of StartHub women, a community of young women using technology and entrepreneurship to champion the visibility of women in the society.
                        </p>
                        <br></br>
                        <p>Mercy has a Higher National Diploma in Computer Science from Heritage Polytechnic, Eket, Akwa Ibom State, Nigeria.</p>
                        <br></br>

                        <h5 className='font-bold text-xl'>Interests:</h5>
                        <dl>
                        <dt className='text-lg font-semibold mt-4'>Writing</dt>
                        <dd className='ml-4'>- I share <a href="https://egberinde.com" target="_blank" rel="noreferrer" className='underline decoration-pink-600 decoration-double underline-offset-4'>this blog</a> with my husband Ola, I write about my travels, thoughts, friends and lifestyle.</dd>
                        <dd className='ml-4 mt-2'>- I have a journal where I've documented my life since Jan 1st 2022. </dd>
                        <dd className='ml-4 mt-2'>- I blog regularly on <a href="https://mercyikpe.hashnode.dev/" target="_blank" rel="noreferrer" className='underline decoration-pink-600 decoration-double underline-offset-4'>this my Hashnode page</a> about Frontend stuffs.</dd>

                        <dt className='font-semibold mt-4'>Travels</dt>
                        <dd className='ml-4'>I explore places, states and countries.</dd>

                        <dt className='font-semibold mt-4'>Dance</dt>
                        <dd className='ml-4'>This is an area I want to improve in as a form of sport.</dd>

                        <dt className='font-semibold mt-4'>Politics</dt>
                        <dd className='ml-4'>I enjoy making policies that impact life so yes, you will most likely see me in organizations that are politics inclined.</dd>

</dl>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About