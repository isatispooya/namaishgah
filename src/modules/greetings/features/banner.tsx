import { motion } from 'framer-motion';
import React from 'react';
import Logoa from '../../../../public/bahar.png';

const GreetingsSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-blue-600 text-white overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 animate-ping"></div>

      {/* Company Logo Animation */}
      <motion.img
        src={Logoa}
        alt="Company Logo"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-xl mb-6 md:mb-0 z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <div dir='rtl' className="flex flex-col items-center md:items-start text-center md:text-left z-10 mt-6 md:mt-0">
        {/* Title Animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          isatispooya
        </motion.h1>

        {/* Short Description Animation */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          className="mt-8 px-6 py-3 bg-teal-500 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-teal-600 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          شروع کنید
        </motion.button>
      </div>
    </div>
  );
};

export default GreetingsSection;