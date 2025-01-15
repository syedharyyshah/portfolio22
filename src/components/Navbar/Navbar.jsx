import React from 'react';
import Linkedin from '../../assets/Linkedin.png';
import GitHub from '../../assets/GitHub.png';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className="navbar h-[100px]">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper max-w-[1366px] m-auto flex justify-between items-center h-[100%] p-4">
        {/* Logo */}
        <motion.span
          className="font-bold text-2xl pl-44 hidden md:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SHS
        </motion.span>

        {/* Social Icons with Hover and Tap Effects */}
        <div className="social flex gap-6 items-center justify-end w-full md:w-auto">
          <motion.a
            href="https://github.com/syedharyyshah"
            whileHover={{ scale: 1.5}}
            whileTap={{ scale: 0.9 }}
          >
            <img className="size-6" src={GitHub} alt="GitHub" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/syed-haris-shah-3271182b8/"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img className="size-6" src={Linkedin} alt="LinkedIn" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
