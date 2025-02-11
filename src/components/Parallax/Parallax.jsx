import React, { useRef } from 'react';
import mountains from '../../assets/mountains.png';
import planets from '../../assets/planets.png';
import stars from '../../assets/stars.png';
import sun from '../../assets/sun.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className="parallax w-full h-screen z-10 relative flex items-center justify-center overflow-hidden"
      ref={ref}
      style={{
        background:
          type === 'services'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #0c0c1d)',
      }}
    >
      <motion.h1
        style={{ y: yText }}
        className="text-white text-5xl md:text-7xl font-bold text-center relative"
      >
        {type === 'services' ? 'What I Do' : 'What I Did?'}
      </motion.h1>
      <motion.div
        className="mountains bg-contain md:bg-cover "
        style={{
          backgroundImage: `url(${mountains})`,
          backgroundPosition: 'bottom', // Aligns the image to the bottom
          width: '100%',
          height: '100%', // Full height
          position: 'absolute',
          backgroundRepeat:'no-repeat',
          zIndex: 3,
        }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === 'services' ? planets : sun})`,
          backgroundSize: 'contain', // Change to 'contain'
          backgroundPosition: 'center', // Center the image
          width: '100%',
          height: '100%', // Full height
          backgroundRepeat:'no-repeat',
          position: 'absolute',
          zIndex: 2,
        }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{
          x: yBg,
          backgroundImage: `url(${stars})`,
          backgroundSize: 'contain', // Change to 'contain'
          backgroundPosition: 'center', // Center the image
          width: '100%',
          height: '100%', // Full height
          position: 'absolute',
          zIndex: 1,
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;