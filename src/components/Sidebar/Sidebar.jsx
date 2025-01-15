import React, { useState } from 'react'
import  Links  from './Links/Links'
import ToggleButton from './ToggleButton/ToggleButton'
import { motion } from 'framer-motion'


const Sidebar = () => {
  const [open,setOpen] = useState(false)

  const variants = {
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stifness:"20",
      }
    },
    closed:{
     clipPath:"circle(30px at 50px 50px)",
     transition:{
      delay:0.5,
      type:"spring",
      stifness:400,
      damping:40,
     },
    },
  };
  return (
    <motion.div className='sidebar flex flex-col items-center content-center bg-white font-black ' animate={open ? "open" : "closed"}>
      <motion.div className="bg z-40 fixed top-0 left-0 bottom-0 w-[200px] md:w-[400px] bg-white"
       variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
