import React from 'react';
import copy from '../../assets/copy.png';
import vector from '../../assets/vector.png';
import scroll from '../../assets/scroll.png';
import { motion } from 'framer-motion';
import cv from "../../assets/Syed Haris Shah CV.pdf";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const vectorVariants = {
  animate: {
    rotate: -360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Additional orbit animations for a subtle universe effect
const orbitVariants = {
  animate: {
    rotate: 360,
    transition: { duration: 24, repeat: Infinity, ease: 'linear' },
  },
};

const orbitVariantsReverse = {
  animate: {
    rotate: -360,
    transition: { duration: 32, repeat: Infinity, ease: 'linear' },
  },
};

const Hero = () => {
  return (
    <div
      className="hero overflow-hidden relative w-full max-w-screen mx-auto px-4"
      style={{
        height: 'calc(100vh - 100px)',
        background: 'linear-gradient(180deg, #0c0c1d, #111132)',
      }}
    >
      {/* On small screens: Image first */}
      <div className="md:hidden block w-full h-[40%] relative">
        <div className="imageContainer absolute bottom-0 left-0 right-0 mx-auto z-10 w-full max-w-[15rem] sm:max-w-[18rem] aspect-square">
          {/* Universe orbits - behind the main image, above the vector */}
          <div className="absolute inset-0 z-[5] pointer-events-none">
            {/* Outer orbit with stars */}
            <motion.div className="hidden sm:block absolute inset-[6%] sm:inset-[4%] md:inset-[2%] lg:inset-[0%] rounded-full" variants={orbitVariants} animate="animate">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]"></span>
              <span className="absolute bottom-[18%] left-[8%] w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-white/70 rounded-full" />
              <span className="absolute top-[22%] right-[10%] w-[4px] h-[4px] md:w-[5px] md:h-[5px] bg-white/60 rounded-full" />
            </motion.div>
            {/* Middle orbit with moon */}
            <motion.div className="absolute inset-[3%] sm:inset-[2%] md:inset-[1%] lg:inset-[0%] rounded-full" variants={orbitVariantsReverse} animate="animate">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 md:w-3 md:h-3 bg-slate-200 rounded-full shadow-[0_0_10px_2px_rgba(203,213,225,0.5)]"></span>
            </motion.div>
            {/* Inner orbit with sun */}
            <motion.div className="absolute inset-[24%] sm:inset-[20%] md:inset-[16%] lg:inset-[12%] xl:inset-[10%] rounded-full" variants={orbitVariants} animate="animate">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 md:w-4 md:h-4 bg-gradient-to-br from-amber-300 via-yellow-300 to-orange-400 rounded-full shadow-[0_0_14px_4px_rgba(251,191,36,0.45)]"></span>
            </motion.div>
          </div>
          <motion.img
            src={vector}
            alt="Vector background"
            className="absolute inset-0 w-full h-full object-contain z-0"
            variants={vectorVariants}
            animate="animate"
          />
          <img
            src={copy}
            alt="Main image"
            className="absolute inset-0 w-full h-full object-contain z-10"
          />
        </div>
      </div>

      {/* Text & Buttons - positioned differently on mobile */}
      <div className="wrapper flex flex-col justify-center w-full md:w-1/2 md:ml-24 gap-5 md:gap-6 z-20 md:absolute md:top-1/2 md:-translate-y-1/2 mt-4 md:mt-0">
        <motion.div
          className="textContainer flex flex-col text-center md:text-left gap-2"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl text-[#663399] font-bold tracking-widest"
            variants={textVariants}
          >
            SYED HARIS SHAH
          </motion.h2>
          <motion.h1
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white"
            variants={textVariants}
          >
            Front End Web Developer
          </motion.h1>
        </motion.div>

        <motion.div
          className="buttons flex flex-wrap items-center justify-center md:justify-start gap-4"
          variants={textVariants}
        >
          <motion.a
            href={cv}
            download="Syed_Haris_Shah_CV.pdf"
            className="px-6 py-3 border border-white rounded-lg bg-transparent text-white font-medium hover:bg-[#663399] hover:text-white tracking-wide transition"
            variants={textVariants}
          >
            Download CV
          </motion.a>
          <motion.a
            href="#Contact"
            className="px-6 py-3 border border-white rounded-lg bg-white text-black font-medium tracking-wide transition"
            variants={textVariants}
          >
            Contact
          </motion.a>
        </motion.div>

        <motion.img
          className="w-10 sm:w-12 mx-auto md:mx-0 mt-4"
          src={scroll}
          alt="Scroll indicator"
          animate="scrollButton"
          variants={textVariants}
        />
      </div>

      {/* Sliding Background Text */}
      <motion.div
        className="slidingTextContainer absolute w-[200%] text-[15vw] sm:text-[12vw] md:text-[10vw] bottom-[-20px] md:bottom-[-60px] whitespace-nowrap font-bold z-0 text-[#ffffff1a]"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Development Services and Much More...
      </motion.div>

      {/* On larger screens: Image position remains the same */}
      <div className="hidden md:block imageContainer absolute bottom-0 right-0 left-0 md:top-0 md:right-0 md:left-auto m-0 z-10 w-[90vw] max-w-[26rem] lg:max-w-[30rem] aspect-square">
        {/* Universe orbits - behind the main image, above the vector */}
        <div className="absolute inset-0 z-[5] pointer-events-none">
          {/* Outer orbit with stars */}
          <motion.div className="absolute inset-[2%] lg:inset-[1%] xl:inset-[0%] rounded-full" variants={orbitVariants} animate="animate">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white/80 rounded-full shadow-[0_0_10px_3px_rgba(255,255,255,0.5)]"></span>
            <span className="absolute bottom-[18%] left-[8%] w-2 h-2 bg-white/70 rounded-full" />
            <span className="absolute top-[22%] right-[10%] w-1.5 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
          {/* Middle orbit with moon */}
          <motion.div className="absolute inset-[1%] lg:inset-[0%] xl:inset-[0%] rounded-full" variants={orbitVariantsReverse} animate="animate">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-slate-200 rounded-full shadow-[0_0_12px_3px_rgba(203,213,225,0.5)]"></span>
          </motion.div>
          {/* Inner orbit with sun */}
          <motion.div className="absolute inset-[16%] lg:inset-[14%] xl:inset-[12%] rounded-full" variants={orbitVariants} animate="animate">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-amber-300 via-yellow-300 to-orange-400 rounded-full shadow-[0_0_16px_5px_rgba(251,191,36,0.45)]"></span>
          </motion.div>
        </div>
        <motion.img
          src={vector}
          alt="Vector background"
          className="absolute inset-0 w-full h-full object-contain z-0"
          variants={vectorVariants}
          animate="animate"
        />
        <img
          src={copy}
          alt="Main image"
          className="absolute inset-0 w-full h-full object-contain z-10"
        />
      </div>
    </div>
  );
};

export default Hero;