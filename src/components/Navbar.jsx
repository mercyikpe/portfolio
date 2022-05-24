// rafce

import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


const Navbar = () => {
	const [nav, setNav] = useState(false)
	const handleClick = () => setNav(!nav)



  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-8 bg-blue-950 text-gray-300'>
        <div>
            <p className='logo text-pink-600 text-3xl'>MI</p>
        </div>

        {/* menu  */}
        <ul className='hidden md:flex text-lg'>
            <li className='hover:underline decoration-pink-600 decoration-double underline-offset-4'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='hover:underline decoration-pink-600 decoration-double underline-offset-4'><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li className='hover:underline decoration-pink-600 decoration-double underline-offset-4'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='hover:underline decoration-pink-600 decoration-double underline-offset-4'><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li className='hover:underline decoration-pink-600 decoration-double underline-offset-4'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/*  Hamburger  */}
        <div onClick={handleClick} className='flex md:hidden z-10'>
			{!nav ? <FaBars /> : <FaTimes />}
            
        </div>
        {/* Mobile menu */}

        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-blue-950 flex flex-col justify-center items-center'}>
            <ul>

            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </div>

        {/* Social icons */}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
			<ul>
				<li className='w-[140px] h-12 flex justify-between items-center ml-[-80px] hover:ml-[5px] duration-300 bg-blue-600'>
					<a href="/" className='flex justify-between items-center w-full text-gray-300'>
					LinkedIn <FaLinkedin size={30} />
					</a>
				</li>
				<li className='w-[140px] h-12 flex justify-between items-center ml-[-80px] hover:ml-[5px] duration-300 bg-[#333333]'>
					<a href="/" className='flex justify-between items-center w-full text-gray-300'>
					Github <FaGithub size={30} />
					</a>
				</li>
				<li className='w-[140px] h-12 flex justify-between items-center ml-[-80px] hover:ml-[5px] duration-300 bg-[#6fc2b0]'>
					<a href="/" className='flex justify-between items-center w-full text-gray-300'>
					Email <HiOutlineMail size={30} />
					</a>
				</li>
				<li className='w-[140px] h-12 flex justify-between items-center ml-[-80px] hover:ml-[5px] duration-300 bg-[#565f69]'>
					<a href="/" className='flex justify-between items-center w-full text-gray-300'>
					Resume <BsFillPersonLinesFill size={30} />
					</a>
				</li>
			</ul>
		</div>

    </div>
  )
}

export default Navbar