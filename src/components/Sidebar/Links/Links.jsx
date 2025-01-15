import { motion } from 'framer-motion';

const variants = {
  open:{
    transition:{
      staggerChildren:0.1,
    }},
    closed: {
      transition:{
        staggerChildren:0.05,
        staggerDirection:-1,
      }
    }
  
}
const itemVariants = {
  open:{
    y:0,
   opacity:1,
  },
  closed:{
    y:50,
    opacity:0,
  }
}

import React from 'react'

const Links = () => {
const items = ["Homepage","Services","Portfolio","Contact"];

  return (
    <div className='links absolute  lg:text-2xl w-full h-full flex flex-col justify-center text-center content-center gap-4 text-black'>
    {items.map(item=>(
      <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>
    ))}
    </div>
  )
}

export default Links




