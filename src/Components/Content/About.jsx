import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/profile.jpg'
import Resume from '../../assets/Resume.pdf'


function About() {

  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='About' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={290} height={290} alt="" className='rounded border-2 p-1 border-fuchsia-500 img_glow' />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-yellow-500 uppercase'>
          About Me
        </h1>
        <p data-aos='fade-left '>
          🙏 Hi! 
          I'm Niranjan , a passionate and detail-oriented last-year student pursuing a degree in Computer Science and Engineering. I am driven by a deep curiosity for emerging technologies and their transformative potential.
          <br />
          🚀 Skills & Expertise: <br/>
          Proficient in programming languages such as Java, C++, and C. Well-versed in software development, algorithms, and data structures. Experienced in database management , JDBC, MERN Stack, Flutter and software engineering principles.
          <br />
          🌍 Career Aspirations: <br />
          Aspiring software engineer with a keen interest in Java Database Connectivity, MERN, Flutter and Web Development. Eager to contribute my skills to cutting-edge projects that make a positive impact.
          <br />
          🔗 Let's Connect: <br />
          I'm excited to connect with fellow students, professionals, and mentors! Whether it's discussing the latest tech trends or exploring potential collaborations, feel free to reach out. Let's connect and grow together!
          <br />
          {/* <br /> */}
          {/* <p className='text-yellow-500'>Keep It Simple</p> */}
         </p>
        <div className='flex mt-8 gap-2 space-x-2 items-center justify-center'>
          <a href={Resume} target="_blank">
            <div className=' nano-button shadow-xl hover:shadow-yellow-500/50 border-2 hover: border-yellow-500 rounded-lg py-4 px-8 uppercase overflow-hidden'>
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About