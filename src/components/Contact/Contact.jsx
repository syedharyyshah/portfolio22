import { motion, AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaCopy, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Phone from '../../assets/Phone.png';

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [copied, setCopied] = useState(false);

  // Form Field States for validation and interactivity
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  // Get values from environment variables
  const email = import.meta.env.VITE_CONTACT_EMAIL || '';
  const phone = import.meta.env.VITE_CONTACT_PHONE || '';
  const address = import.meta.env.VITE_CONTACT_ADDRESS || '';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // Basic validation rules
  const errors = {
    name: touched.name && formData.name.trim() === '' ? 'Name is required' : '',
    email: touched.email && (!formData.email.includes('@') || formData.email.trim() === '') ? 'Valid email is required' : '',
    message: touched.message && formData.message.trim().length < 10 ? 'Message must be at least 10 characters' : '',
  };

  const isFormValid = formData.name.trim() !== '' && formData.email.includes('@') && formData.message.trim().length >= 10;

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setError(true);
      setStatusMsg('Please correct the validation errors before sending.');
      return;
    }

    setIsSending(true);
    setError(false);
    setSuccess(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setIsSending(false);
      setError(true);
      setStatusMsg('Configuration error: EmailJS credentials not found in env.');
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setIsSending(false);
          setStatusMsg('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setTouched({ name: false, email: false, message: false });
        },
        (err) => {
          setError(true);
          setSuccess(false);
          setIsSending(false);
          setStatusMsg('Failed to send message. Please try again later.');
          console.error('FAILED...', err);
        }
      );
  };

  React.useEffect(() => {
    if (!statusMsg) return;
    const t = setTimeout(() => setStatusMsg(''), 6000);
    return () => clearTimeout(t);
  }, [statusMsg]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0c0c1d] via-[#0c0c1d] to-[#111132] overflow-y-auto">
      <motion.div
        className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 relative"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Info Column */}
        <div className="flex-1 flex flex-col justify-between gap-8">
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Let's <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Work Together</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
              Have a project in mind, want to collaborate, or just want to say hi? Drop me a message and let's build something extraordinary!
            </p>
          </motion.div>

          <div className="space-y-5">
            {/* Mail Card */}
            <motion.div
              className="flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              variants={itemVariants}
              onClick={copyEmailToClipboard}
              whileHover={{ x: 5 }}
            >
              <div className="absolute top-0 right-0 p-3 text-white/20 group-hover:text-orange-500 transition-colors">
                <FaCopy size={14} className={copied ? 'scale-0' : 'scale-100 transition-all'} />
                {copied && (
                  <span className="absolute right-3 top-3 text-xs text-green-400 font-medium whitespace-nowrap bg-[#111132] border border-green-500/30 px-2 py-0.5 rounded shadow">
                    Copied!
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 group-hover:text-gray-300 transition-colors uppercase tracking-wider">Mail</h3>
                <span className="text-white font-medium text-sm sm:text-base break-all">{email}</span>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.a
              href={phone ? `tel:${phone.replace(/\s+/g, '')}` : '#'}
              className="flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 group block"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 group-hover:text-gray-300 transition-colors uppercase tracking-wider">Phone</h3>
                <span className="text-white font-medium text-sm sm:text-base">{phone}</span>
              </div>
            </motion.a>

            {/* Address Card */}
            <motion.a
              href={address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 group block"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 group-hover:text-gray-300 transition-colors uppercase tracking-wider">Address</h3>
                <span className="text-white font-medium text-sm sm:text-base">{address}</span>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Form Column */}
        <motion.div className="flex-1 relative z-10" variants={itemVariants}>
          {/* Subtle Phone background ornament */}
          <div className="absolute -right-12 -top-16 opacity-10 pointer-events-none -z-10 mix-blend-screen select-none hidden md:block">
            <img src={Phone} alt="Phone ornament" className="w-80 h-auto" />
          </div>

          <form
            className="flex flex-col gap-5 bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            ref={formRef}
            onSubmit={sendEmail}
          >
            {/* Status Alerts */}
            <AnimatePresence>
              {statusMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex items-center gap-3 p-3 rounded-lg text-sm border ${
                    error ? 'bg-red-500/10 border-red-500/30 text-red-300' : 'bg-green-500/10 border-green-500/30 text-green-300'
                  }`}
                >
                  {error ? <FaExclamationCircle size={16} /> : <FaCheckCircle size={16} />}
                  <span>{statusMsg}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Name Input */}
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={() => handleBlur('name')}
                required
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-white placeholder-gray-500 text-sm ${
                  errors.name
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-white/10 focus:border-orange-500/50 focus:ring-orange-500/20'
                }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-xs text-red-400 mt-1 font-medium">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={() => handleBlur('email')}
                required
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-white placeholder-gray-500 text-sm ${
                  errors.email
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-white/10 focus:border-orange-500/50 focus:ring-orange-500/20'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-xs text-red-400 mt-1 font-medium">{errors.email}</p>}
            </div>

            {/* Message Input */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Message
                </label>
                <span className="text-[10px] text-gray-500">
                  {formData.message.length} chars
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                onBlur={() => handleBlur('message')}
                required
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-white placeholder-gray-500 text-sm resize-none ${
                  errors.message
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-white/10 focus:border-orange-500/50 focus:ring-orange-500/20'
                }`}
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-xs text-red-400 mt-1 font-medium">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSending || !isFormValid}
              className={`w-full py-3.5 rounded-lg font-bold text-white shadow-lg transition-all duration-300 ${
                isSending || !isFormValid
                  ? 'bg-white/10 text-gray-500 cursor-not-allowed border border-white/5'
                  : 'bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 active:scale-98 cursor-pointer'
              }`}
              whileHover={!isSending && isFormValid ? { scale: 1.02 } : {}}
              whileTap={!isSending && isFormValid ? { scale: 0.98 } : {}}
            >
              {isSending ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Sending Message...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
