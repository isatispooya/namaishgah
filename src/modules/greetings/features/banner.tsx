import { motion } from "framer-motion";
import React from "react";
import Logoa from "../../../../public/bahar.png";

const GreetingsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-4  md:p-8 md:flex-row-reverse">

      <motion.img
        src={Logoa}
        alt="Company Logo"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-6 md:mb-0 md:ml-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div
        dir="rtl"
        className="flex flex-col items-center md:items-start w-full md:w-auto"
      >
        <div>
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 tracking-wide border-b-2 border-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            ایساتیس پویا
          </motion.h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full md:w-auto">
          <motion.p
            className="text-base md:text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default GreetingsSection;
