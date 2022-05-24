import React from 'react'

function Contact() {
  return (
    <div name='contact' className='md:h-screen bg-blue-950 text-gray-300'>
        <div className="p-4 flex flex-col justify-center w-full h-full max-w-[600px] mx-auto">
            <div className='pb-8'>
            <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</h2>
                <p className='py-6'>// Need to reach me? Send a mail using the form below, I promise to respond.</p>
            </div>

            <form method="POSt" action="https://getform.io/f/db9541ad-82d3-47a1-ae8a-2baaabacd490" className='flex flex-col'>
                <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="text" placeholder='Name' name='Name' />
                <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='Email' name='Email' />

                <textarea className='my-4 p-2 bg-[#ccd6f6] resize-none text-black' name="message" cols="30" rows="10" placeholder='Message'></textarea>

                <button className='border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact