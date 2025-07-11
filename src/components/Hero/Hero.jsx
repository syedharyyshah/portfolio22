import React from 'react';
import copy from '../../assets/copy.png';
import vector from '../../assets/vector.png';
import scroll from '../../assets/scroll.png';
import { motion } from 'framer-motion';
import cv from '../../assets/Syed Haris Shah CV.pdf';

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
        <div className="imageContainer absolute bottom-0 left-0 right-0 mx-auto z-10 w-full max-w-[20rem] aspect-square">
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
      <div className="hidden md:block imageContainer absolute bottom-0 right-0 left-0 md:top-0 md:right-0 md:left-auto mx-auto md:mx-0 z-10 w-[90vw] max-w-[30rem] aspect-square">
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