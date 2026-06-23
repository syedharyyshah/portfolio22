import React from 'react';
import copy from '../../assets/copy.png';
import vector from '../../assets/vector.png';
import scroll from '../../assets/scroll.png';
import { motion } from 'framer-motion';
import cv from "../../assets/Syed Haris Shah CV.pdf";

const textVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
      staggerChildren: 0.12,
    },
  },
  scrollButton: {
    y: [0, 12, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
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
      className="hero overflow-hidden relative w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 sm:px-12 md:px-20 lg:px-32 gap-8 md:gap-4"
      style={{
        height: 'calc(100vh - 100px)',
        background: 'linear-gradient(180deg, #0c0c1d, #111132)',
      }}
    >
      {/* Text & Buttons */}
      <div className="wrapper flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4 sm:gap-5 md:gap-6 z-20 max-w-xl">
        <motion.div
          className="textContainer flex flex-col gap-2"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-xs sm:text-sm md:text-base font-extrabold tracking-[0.2em] bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent uppercase"
            variants={textVariants}
          >
            SYED HARIS SHAH
          </motion.h2>
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
            variants={textVariants}
          >
            Full Stack Web Developer
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed hidden sm:block mt-1"
            variants={textVariants}
          >
            I build high-performance, visually stunning, and responsive web applications with modern full-stack technologies.
          </motion.p>
        </motion.div>

        <motion.div
          className="buttons flex flex-row items-center justify-center md:justify-start gap-4 mt-2"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.a
            href={cv}
            download="Syed_Haris_Shah_CV.pdf"
            className="px-5 py-3 sm:px-6 sm:py-3.5 border border-orange-500/50 text-orange-500 rounded-xl font-semibold text-sm hover:bg-orange-500 hover:text-white shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            variants={textVariants}
          >
            Download CV
          </motion.a>
          <motion.a
            href="#Contact"
            className="px-5 py-3 sm:px-6 sm:py-3.5 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-xl font-semibold text-sm hover:from-orange-500 hover:to-amber-400 shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all duration-300"
            variants={textVariants}
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.img
          className="w-8 sm:w-10 mt-4 opacity-75 hidden sm:block"
          src={scroll}
          alt="Scroll indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          variants={textVariants}
        />
      </div>

      {/* Image Container with Floating and Universe Orbits */}
      <div className="relative flex items-center justify-center w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] aspect-square z-10 mt-4 md:mt-0">
        <motion.div
          className="relative w-full h-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Universe orbits */}
          <div className="absolute inset-0 z-[5] pointer-events-none">
            {/* Outer orbit with stars */}
            <motion.div className="absolute inset-[2%] rounded-full" variants={orbitVariants} animate="animate">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/80 rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]"></span>
              <span className="absolute bottom-[18%] left-[8%] w-1 h-1 bg-white/70 rounded-full" />
              <span className="absolute top-[22%] right-[10%] w-1 h-1 bg-white/60 rounded-full" />
            </motion.div>
            {/* Middle orbit with moon */}
            <motion.div className="absolute inset-[-2%] rounded-full" variants={orbitVariantsReverse} animate="animate">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-200 rounded-full shadow-[0_0_10px_2px_rgba(203,213,225,0.5)]"></span>
            </motion.div>
            {/* Inner orbit with sun */}
            <motion.div className="absolute inset-[10%] rounded-full" variants={orbitVariants} animate="animate">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-gradient-to-br from-amber-300 via-yellow-300 to-orange-400 rounded-full shadow-[0_0_14px_4px_rgba(251,191,36,0.45)]"></span>
            </motion.div>
          </div>

          <motion.img
            src={vector}
            alt="Vector background"
            className="absolute inset-0 w-full h-full object-contain z-0 opacity-80"
            variants={vectorVariants}
            animate="animate"
          />
          <img
            src={copy}
            alt="Main image"
            className="absolute inset-0 w-full h-full object-contain z-10 drop-shadow-[0_0_30px_rgba(102,51,153,0.3)]"
          />
        </motion.div>
      </div>

      {/* Sliding Background Text */}
      <motion.div
        className="slidingTextContainer absolute w-[200%] text-[10vw] bottom-[-20px] md:bottom-[-40px] whitespace-nowrap font-bold z-0 text-[#ffffff06] select-none pointer-events-none"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Development Services and Much More...
      </motion.div>
    </div>
  );
};

export default Hero;