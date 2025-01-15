import React from 'react';
import { motion } from 'framer-motion';
import people from '../../assets/people.webp';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import tailwind from '../../assets/tailwind.png';
import react from '../../assets/react.png';

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      ease: 'easeOut',
    },
  },
};

const Services = () => {
  return (
    <motion.div
      style={{ background: 'linear-gradient(180deg, #0c0c1d, #111132)' }}
      className='h-full flex flex-col justify-center items-center px-4 sm:px-0'
      variants={variants}
      initial='initial'
      whileInView='animate'
    >
      <motion.div className="textContainer flex flex-col md:flex-row items-center gap-5 justify-center text-center md:justify-end" variants={variants}>
        <p className='text-sm text-gray-600'>I focus on helping your brand grow <br /> and move forward</p>
        <hr className="w-[200px] md:w-[500px] border-t border-gray-400" />
      </motion.div>

      <motion.div className="titleContainer flex flex-col items-center w-full gap-5" variants={variants}>
        <motion.div className="title flex flex-col items-center" variants={variants}>
          <img className='w-[150px] md:w-[330px] h-[50px] md:h-[100px] rounded-full object-cover mt-5 md:mt-0' src={people} alt="Profile" />
          <h1 className='text-[28px] md:text-[50px] font-thin'>
            <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Front end
          </h1>
        </motion.div>
        <motion.div className="title flex flex-col md:flex-row text-center items-center gap-4 md:gap-12" variants={variants}>
          <h1 className='text-[28px] md:text-[50px] font-thin'>
            <motion.b whileHover={{ color: 'orange' }}>Web</motion.b> Development
          </h1>
          <motion.button className="w-[120px] md:w-[200px] h-[40px] md:h-[60px] rounded-full bg-orange-500 text-white text-sm md:text-2xl cursor-pointer hover:scale-105 transition-transform" variants={variants}>
            My Tech Stack
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div className='grid grid-cols-3 sm:grid-cols-6 gap-4 mt-8' variants={variants}>
        {[{ img: html, label: 'HTML' }, { img: css, label: 'CSS' }, { img: javascript, label: 'JavaScript' }, { img: tailwind, label: 'Tailwind CSS' }, { img: react, label: 'React JS' }].map((tech, index) => (
          <motion.div key={index} className='flex flex-col items-center' variants={variants}>
            <img src={tech.img} alt={tech.label} className='w-[40px] md:w-[100px]' />
            <p className='mt-2 text-sm'>{tech.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
