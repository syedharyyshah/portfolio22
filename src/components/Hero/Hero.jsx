import React from 'react'
import copy from '../../assets/copy.png'
import scroll from '../../assets/scroll.png'
import { motion } from 'framer-motion'
import cv from '../../assets/Syed Haris Shah CV.pdf' 

const textVariants = {
  initial:{
    x: -500,
    opacity:0,
  },
  animate:{
    x: 0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};


const sliderVariants = {
  initial:{
    x:0,
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType:'mirror',
      duration:20,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero overflow-hidden relative max-w-[1366px]  ' 
    style={{
        height: 'calc(100vh - 100px)',
        background: 'linear-gradient(180deg, #0c0c1d, #111132)',
      }}>

        
       <div className="wrapper absolute flex flex-col content-center justify-center w-full md:w-1/2 md:m-24 gap-1 md:gap-6 z-20 ">
        <motion.div className="textContainer flex flex-col  text-center md:text-left
          gap-2"
        variants={textVariants} initial="initial" animate="animate">

            <motion.h2 className='text-2xl text-[#663399] font-bold
             tracking-widest 'variants={textVariants}>SYED HARIS SHAH</motion.h2>

            <motion.h1 className='text-3xl md:text-8xl'variants={textVariants}>Front End Web Developer</motion.h1>
        </motion.div>
            <motion.div className="buttons flex items-center justify-center md:justify-start "variants={textVariants}>
                <motion.a href={cv} download="Syed_Haris_Shah_CV.pdf" className='px-6  inline-block py-3 p-2 md:p-4 cursor-pointer
                 mr-4 border border-white rounded-lg bg-transparent text-white font-medium hover:bg-[#663399] hover:text-white
                   tracking-wide'vriants={textVariants}>Download CV</motion.a>
                <motion.a href="#Contact" className='px-6 p inline-block py-3 p-2 md:p-4 cursor-pointer border
                 border-white rounded-lg bg-white text-black font-medium tracking-wide'vriants={textVariants}>Contact </motion.a>
            </motion.div>

            <motion.img className='w-12  ml-56 md:m-0' src={scroll} alt="" animate="scrollButton" variants={textVariants} />
        
            </div>


            {/* <motion.div 
        className="slidingTextContainer absolute w-1/2 text-[50vh] bottom-[-120px] whitespace-nowrap font-bold z-0 text-[#ffffff1a]"
         variants={sliderVariants}
         initial="initial"
         animate="animate"
         >
          Web Development Services and Much More...
        </motion.div> */}
        
             
        <div className="imageContainer absolute object-cover top-24 md:top-0  right-0 z-10  ">
        <img src={copy} alt="" />
        </div>
        
        

        


     
    </div>
  )
}

export default Hero
