import React from 'react'
import Folarin from '../assets/folarin.png'
import Kingsley from '../assets/kingsley.png'
import Pesapeer from '../assets/pesapeer.png'
import Dryva from '../assets/dryva.png'
import MPM from '../assets/mpm.png'
import PHPSandbox from '../assets/phpsandbox.png'
import UIPHPSandbox from '../assets/ui-phpsandbox.png'

function Projects() {
  return (
    <div name='projects' className='pt-24 w-full bg-blue-950 text-gray-300'>
        
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
           
            <h2 className='text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>Projects</h2>
                <p className='py-6'>{'//'} There are some projects I worked on.</p>
            </div>
                
                <div className="project-container grid grid-cols-1 sm:grid-cols-2">
                
                    <div className="project-img-wrapper">
                        <img className='project-img' src={Pesapeer} alt="Pesapeer UI" />
                    </div>

                    <div className="project-details-container">
                        <div className="project-details-wrapper">
                        
                        <h3 className="project-details-title">Landing page for currency exchange</h3>
                        <p className="project-details-desc">
                        I collaborated with my teammates on this project. Using the provided endpoint, I fetch the available currencies and the exchange rate of all currencies. I also implemented a fully responsive User Interface for the entire site.
                        </p>

                        <h6 className='project-details-tools'>Tools used</h6>
                        
                        <ul className='project-details-tools-list'>
                            <li>
                                VueJS
                            </li>
                            <li>
                                TailwindCSS
                            </li>
                            <li>
                                SCSS
                            </li>
                            <li>
                                Intercom
                            </li>
                        </ul> 
                        <div className="mt-6 project-details-link-wrapper">
                        <a target='_blank' rel="noreferrer" href='https://site2.pesapeer.com' className='project-details-link'>Demo</a>
                        </div>
                        </div>
                    </div>

                </div>



                <div className="project-container grid grid-cols-1 sm:grid-cols-2">
                
                    <div className="project-img-wrapper">
                        <img className='project-img' src={PHPSandbox} alt="PHPSandbox UI" />
                    </div>

                    <div className="project-details-container">
                        <div className="project-details-wrapper">
                        
                        <h3 className="project-details-title">PHPSandbox: an Online IDE for building PHP applications</h3>
                        <p className="project-details-desc">
                        Worked with a group of other frontend and backend developers and implemented the frontend for PHPSandbox.
                        </p>

                        <h6 className='project-details-tools'>Tools used</h6>
                        
                        <ul className='project-details-tools-list'>
                            <li>
                                VueJS
                            </li>
                            <li>
                                TailwindCSS
                            </li>
                            <li>
                                SCSS
                            </li>
                            <li>
                                TypeScript
                            </li>
                        </ul> 
                        <div className="mt-6 project-details-link-wrapper">
                        <a target='_blank' rel="noreferrer" href='https://phpsandbox.io' className='project-details-link'>Demo</a>
                        </div>
                        </div>
                    </div>

                </div>


                <div className="project-container grid grid-cols-1 sm:grid-cols-2">
                
                    <div className="project-img-wrapper">
                        <img className='project-img' src={UIPHPSandbox} alt="PHPSandbox UI" />
                    </div>

                    <div className="project-details-container">
                        <div className="project-details-wrapper">
                        
                        <h3 className="project-details-title">A design system for PHPSandbox</h3>
                        <p className="project-details-desc">
                            Collaborated with a frontend developer and implemented a Design System which was used to build the main PHPSandbox platform.
                        </p>

                        <h6 className='project-details-tools'>Tools used</h6>
                        
                        <ul className='project-details-tools-list'>
                            <li>
                                VueJS
                            </li>
                            <li>
                                TailwindCSS
                            </li>
                            <li>
                                SCSS
                            </li>
                            <li>
                                TypeScript
                            </li>
                        </ul> 
                        <div className="mt-6 project-details-link-wrapper">
                        <a target='_blank' rel="noreferrer" href='https://ui.phpsandbox.io' className='project-details-link'>Demo</a>
                        </div>
                        </div>
                    </div>

                </div>



                <div className="project-container grid grid-cols-1 sm:grid-cols-2">
                
                    <div className="project-img-wrapper">
                        <img className='project-img' src={Folarin} alt="PHPSandbox UI" />
                    </div>

                    <div className="project-details-container">
                        <div className="project-details-wrapper">
                        
                        <h3 className="project-details-title">A Portfolio for a designer</h3>
                        <p className="project-details-desc">
                            Implemented a responsive porfolio site following the design on Figma.
                        </p>

                        <h6 className='project-details-tools'>Tools used</h6>
                        
                        <ul className='project-details-tools-list'>
                            <li>
                                VueJS
                            </li>
                            <li>
                                TailwindCSS
                            </li>
                            <li>
                                SCSS
                            </li>
                        </ul> 
                        <div className="mt-6 project-details-link-wrapper">
                        <a target='_blank' rel="noreferrer" href='https://www.folarinlawal.com' className='project-details-link'>Demo</a>
                        </div>
                        </div>
                    </div>

                </div>

                <div className="project-container grid grid-cols-1 sm:grid-cols-2">
                
                    <div className="project-img-wrapper">
                        <img className='project-img' src={Kingsley} alt="PHPSandbox UI" />
                    </div>

                    <div className="project-details-container">
                        <div className="project-details-wrapper">
                        
                        <h3 className="project-details-title">A Portfolio for a designer</h3>
                        <p className="project-details-desc">
                            Implemented a responsive porfolio site following the design on Figma.
                        </p>

                        <h6 className='project-details-tools'>Tools used</h6>
                        
                        <ul className='project-details-tools-list'>
                            <li>
                                VueJS
                            </li>
                            <li>
                                TailwindCSS
                            </li>
                            <li>
                                SCSS
                            </li>
                        
                        </ul> 
                        <div className="mt-6 project-details-link-wrapper">
                        <a target='_blank' rel="noreferrer" href='https://www.kingsleyomin.com' className='project-details-link'>Demo</a>
                        </div>
                        </div>
                    </div>

                </div>


                <div className="project-container grid grid-cols-1 sm:grid-cols-2 hidden">
                
                    <div className="project-img-wrapper">
                        <img className='project-img' src={Dryva} alt="PHPSandbox UI" />
                    </div>

                    <div className="project-details-container">
                        <div className="project-details-wrapper">
                        
                        <h3 className="project-details-title">A business website for a logistics company</h3>
                        <p className="project-details-desc">
                            Implemented a responsive business website that shows information about the Company, Services offer and how to contact the company.
                        </p>

                        <h6 className='project-details-tools'>Tools used</h6>
                        
                        <ul className='project-details-tools-list'>
                            <li>
                                VueJS
                            </li>
                            <li>
                                TailwindCSS
                            </li>
                            <li>
                                SCSS
                            </li>
                        
                        </ul> 
                        <div className="mt-6 project-details-link-wrapper">
                        <a target='_blank'  rel="noreferrer" href='https://www.kingsleyomin.com' className='project-details-link'>Demo</a>
                        </div>
                        </div>
                    </div>

                </div>


                <div className="project-container grid grid-cols-1 sm:grid-cols-2">
                
                    <div className="project-img-wrapper">
                        <img className='project-img' src={MPM} alt="PHPSandbox UI" />
                    </div>

                    <div className="project-details-container">
                        <div className="project-details-wrapper">
                        
                        <h3 className="project-details-title">Maintain Peace Movement, UK</h3>
                        <p className="project-details-desc">
                        A WordPress Site for an NGO, an organization that promotes peace in its community.
                        </p>

                        <h6 className='project-details-tools'>Tools used</h6>
                        
                        <ul className='project-details-tools-list'>
                            <li>
                                Wordpress
                            </li>
                        </ul> 
                        <div className="mt-6 project-details-link-wrapper">
                        <a target='_blank'  rel="noreferrer" href='https://www.kingsleyomin.com' className='project-details-link'>Demo</a>
                        </div>
                        </div>
                    </div>

                </div>

        </div>
    </div>
  )
}

export default Projects