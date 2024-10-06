import { motion } from "framer-motion";
import React from "react";
import Logoa from "../../../public/bahar.png";


const HomePage: React.FC = () => {
  const circleVariants = {
    animate: {
      scale: [1, 1.4, 1],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const lowerCircleVariants = {
    animate: {
      opacity: [0.6, 0.8, 0.6],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-white to-blue-400 text-white overflow-hidden">
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full shadow-lg"
        variants={circleVariants}
        animate="animate"
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full shadow-lg"
        variants={lowerCircleVariants}
        animate="animate"
      ></motion.div>

      <motion.img
        src={Logoa}
        alt="Company Logo"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-xl mb-6 md:mb-0 z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
      />

      <div
        dir="rtl"
        className="flex flex-col items-center md:items-start text-center md:text-left z-10 mt-6 md:mt-0"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          ایساتیس پویا
        </motion.h1>

        <motion.p
          className="text-lg font-bold md:text-xl leading-relaxed max-w-lg "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
         گروه مالی و سرمایه گذاری
        </motion.p>
      </div>
      <motion.span
          className="text-md md:text-xl font-semibold text-center max-w-lg text-black mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
            برای شرکت در قرعه کشی به غرفه ایساتیس پویا مراجعه کنید
        </motion.span>
    </div>
  );
};

export default  HomePage;
