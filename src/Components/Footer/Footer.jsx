import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

function Footer() {

    const social = [
        {
          link: 'https://linkedin.com/in/niranjan-digraje-075412244',
          icon: <FaLinkedinIn/>,
        },
        {
          link: 'https://github.com/niranjan-digraje',
          icon: <AiFillGithub/>,
        },
        // {
        //   link: 'https://twitter.com/mr_kasliwal',
        //   icon: <FaXTwitter/>,
        // },
        {
          link: 'https://www.instagram.com/niranjansd_1908',
          icon: <FaInstagram/>,
        }
      ]
      
    return (
        <footer className='md:flex md:px-10 lg:flex bg-white dark:bg-slate-800 text-black dark:text-white lg:px-48 px-4 py-5 justify-between border-t border-slate-800'>
                <div>
                    <h5 className='text-[20px]  flex items-center justify-center'>Thank You For Visiting !</h5>
                    <h5 className='text-[20px]  flex items-center justify-center'>NiranjanSD.pvt.ltd.</h5>
                    <h5 className='text-[20px]  flex items-center justify-center'>Copyright © 2024. All rights are reserved</h5>
                </div>
                <div className='md:flex lg:flex gap-10 '>
                    <div>
                        <h2 className='text-[22px] font-semibold text-yellow-500 py-2  uppercase flex items-center justify-center'>Contact</h2>
                        <a href="mailto:niranjandigraje@gmail.com" className='text-[16px] flex items-center justify-center hover:text-yellow-500 transition-all duration-150 ease-in-out cursor-pointer'>Email: niranjandigraje@gmail.com</a>
                        <p className='text-[16px] pb-5 flex items-center justify-center hover:text-yellow-500 transition-all duration-150 ease-in-out'>Phone: +91-7249151108</p>
                    </div>
                    <div>
                        <h2 className='text-[22px] font-semibold text-yellow-500 py-2 uppercase flex items-center justify-center'>Follow Me</h2>
                        <div className='flex space-x-4 flex items-center justify-center'>
                            {social.map((social, index) => (
                                <a key={index} target="_blank" href={social.link} className=' hover:text-yellow-500 transition-all duration-150 ease-in-out'>
                                <div  className='text-[28px] '>
                                    {social.icon}
                                </div>                    
                            </a>
                            ))}
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
