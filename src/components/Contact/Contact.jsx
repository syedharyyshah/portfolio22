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
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ulajdt7';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_s0j9gnq';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'r-6bRsMxIwrGsJJET';

    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          console.log('SUCCESS!');
          setIsSending(false);
          setStatusMsg('Message sent successfully!');
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.log('FAILED...', error.text);
          setIsSending(false);
          setStatusMsg('Failed to send. Please try again.');
        }
      );
  };

  React.useEffect(() => {
    if (!statusMsg) return;
    const t = setTimeout(() => setStatusMsg(''), 5000);
    return () => clearTimeout(t);
  }, [statusMsg]);

  return (
    <motion.div
      className="contact w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer flex-1 w-full flex md:items-start md:justify-start text-center md:text-left flex-col gap-5 sm:gap-8" variants={variants}>
        <motion.h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight break-words" variants={variants}>
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
      <div className="formContainer flex-1 w-full relative z-10">
        <motion.div
          className="phoneSvg absolute right-2 top-[-1rem] sm:right-4 sm:top-[-1rem] lg:right-8 lg:top-[-2rem] text-orange-600 -z-10 pointer-events-none opacity-40"
          initial={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          whileInView={{ opacity: 0 }}
        >
          <img src={Phone} alt="Phone Icon" className="w-32 sm:w-40 md:w-60 lg:w-80" />
        </motion.div>
        <motion.form
          className="flex flex-col gap-4 sm:gap-5 md:gap-6 bg-white/5 rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-sm border border-white/10"
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          transition={{ delay: 4, duration: 1 }}
          whileInView={{ opacity: 1 }}
        >
          <input
            className="w-full p-3 md:p-4 bg-transparent border border-white/30 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-white/60 rounded-md"
            type="text"
            required
            placeholder="Name"
            name="name"
          />
          <input
            className="w-full p-3 md:p-4 bg-transparent border border-white/30 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-white/60 rounded-md"
            type="email"
            required
            placeholder="Email"
            name="email"
          />
          <textarea
            className="w-full p-3 md:p-4 bg-transparent border border-white/30 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-white/60 rounded-md"
            rows={6}
            placeholder="Message"
            name="message"
          />
          <button
            disabled={isSending}
            className={`w-full sm:w-auto px-5 py-3 md:px-6 md:py-4 border-none rounded-md font-semibold text-white transition-colors ${isSending ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-500 active:bg-orange-700 cursor-pointer'}`}
            type="submit"
          >
            {isSending ? 'Sending…' : error ? 'Error Sending' : success ? 'Message Sent' : 'Submit'}
          </button>
          <div
            aria-live="polite"
            role="status"
            className={`min-h-[1.5rem] pt-2 text-sm ${error ? 'text-red-400' : success ? 'text-green-400' : 'text-white/70'}`}
          >
            {!isSending && statusMsg}
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
