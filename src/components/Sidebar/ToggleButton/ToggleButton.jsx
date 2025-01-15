import React from 'react';
import { motion } from 'framer-motion';

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      className="button z-50  pl-[15px] w-14 h-14 rounded-full fixed top-6 text-center left-6 bg-transparent border-none cursor-pointer "
      onClick={() => setOpen((prev) => !prev)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 16.364 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.364' },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
