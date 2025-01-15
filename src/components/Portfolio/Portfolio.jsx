import React, { useRef } from 'react';
import proj11 from '../../assets/proj11.jpg';
import proj22 from '../../assets/proj22.jpg';
import proj33 from '../../assets/proj33.jpg';
import proj44 from '../../assets/proj44.jpg';
import proj55 from '../../assets/proj55.jpg';
import proj66 from '../../assets/proj66.jpg';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  { id: 1,
    title: 'Shop',
    img: proj11, desc: ' an e-commerce web application I built with React, providing a modern and responsive online shopping experience.',
    link:'https://dukaan-henna.vercel.app/' },
  { id: 2,
    title: ' Disney+ Replica',
    img: proj22, desc: ' React-based web application replicating the Disney+ user interface with dynamic content and responsive design.',
    link:'https://disney-replica-gzkf.vercel.app/' },
  { id: 3,
    title: ' e-commerce',
    img: proj33, desc: ' React-based online shopping platform featuring a user-friendly interface and responsive design for seamless product browsing and purchasing.',
    link:'https://e-commerce-haris.vercel.app/' },
  { id: 4,
    title: 'Orange Fruit Shop',
    img: proj44, desc: 'The Orange-Fruit-Shop project is a React-based web application I designed for an online fruit store, offering a clean and responsive interface for browsing and purchasing fresh fruits.',
    link:'https://orange-fruit-shop.vercel.app/' },
  { id: 5,
    title: 'Real-Estate-Agency',
    img: proj55, desc: 'The Real-Estate-Agency project is a React-based web application I designed for showcasing property listings with a modern, responsive interface for seamless property browsing and inquiries.',
    link:'https://real-estate-agency-black.vercel.app/' },
  { id: 6,
    title: 'FYP',
    img: proj66, desc: 'The FYP-IntraChat project is a real-time web chat application we designed for intra-departmental communication, built with React, Node.js, WebSocket, and MongoDB for seamless messaging and user management.',
    link:'https://fyp-intra-chat.vercel.app/' },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container flex flex-col sm:flex-row items-center w-full h-full overflow-hidden p-4 md:m-16 sm:p-0">
        <div className="wrapper max-w-[1200px] w-full h-full flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          <div className="imageContainer flex-1 h-64 sm:h-1/2" ref={ref}>
            <img className='h-full w-full object-cover m-0 md:ml-5' src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer flex-1 flex flex-col gap-4 sm:gap-8 items-center sm:items-start text-center sm:text-left"  style={{ y }}>
            <h2 className='text-2xl sm:text-5xl font-semibold  '>{item.title}</h2>
            <p className='text-gray-300 text-xs sm:text-sm'>{item.desc}</p>
            <motion.button
     onClick={() => window.open(item.link, '_blank')}
     whileHover={{ scale: 1.1 }}  
     whileTap={{ scale: 0.9 }}  
     className='bg-orange-600 cursor-pointer ease-in-out border-none rounded-md p-2 md:p-3
      w-[150px] md:w-[200px]  md:m-0 text-white font-semibold'
   >
  Go Live
   </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio relative" ref={ref}>
      <div className="progress sticky top-0 left-0 pt-4 sm:pt-[50px] text-center text-orange-600 text-xl sm:text-2xl  md:text-5xl">
        <h1 className='text-3xl sm:text-6xl'>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar h-2 sm:h-[10px] bg-white"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
