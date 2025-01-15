import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import Phone from '../../assets/Phone.png';
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_t0ayl9m', 
        'template_s0j9gnq',
        formRef.current,
        'r-6bRsMxIwrGsJJET' 
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          console.log('SUCCESS!');
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <motion.div
      className="contact h-full max-w-[1366px] m-6 sm:m-12 lg:m-24  flex flex-col lg:flex-row items-center gap-6 lg:gap-14 "
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer flex-1 flex md:items-left md:justify-start text-center md:text-left flex-col gap-6 sm:gap-10" variants={variants}>
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl " variants={variants}>
          Let's Work Together
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2 className="text-xl sm:text-2xl">Mail</h2>
          <span className="font-light">syedharryshah1@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2 className="text-xl sm:text-2xl">Address</h2>
          <span className="font-light">Peshawar, Pakistan</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2 className="text-xl sm:text-2xl">Phone</h2>
          <span className="font-light">0313 9055543</span>
        </motion.div>
      </motion.div>
      <div className="formContainer flex-1 relative z-10">
        <motion.div
          className="phoneSvg absolute m-auto text-orange-600 -z-10 "
          initial={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          whileInView={{ opacity: 0 }}
        >
          <img src={Phone} alt="Phone Icon" className="w-48 md:w-[450px]" />
        </motion.div>
        <motion.form
          className="flex flex-col  gap-5 md:gap-6"
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          transition={{ delay: 4, duration: 1 }}
          whileInView={{ opacity: 1 }}
        >
          <input
            className="p-2 md:p-4  bg-transparent border border-white text-white rounded-sm"
            type="text"
            required
            placeholder="Name"
            name="name"
          />
          <input
            className="p-2 md:p-4 bg-transparent border border-white text-white rounded-sm"
            type="email"
            required
            placeholder="Email"
            name="email"
          />
          <textarea
            className="p-2 md:p-4 bg-transparent border border-white text-white rounded-sm"
            rows={6}
            placeholder="Message"
            name="message"
          />
          <button
            className="p-2 md:p-4 border-none bg-orange-600 cursor-pointer font-medium text-white"
            type="submit"
          >
            {error ? 'Error Sending' : success ? 'Message Sent' : 'Submit'}
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
