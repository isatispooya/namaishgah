import React from "react";
import RandomQuiz from "./Qa.feature";
import { motion } from "framer-motion";

interface QaPageProps {
  onFinishTest: () => void;
  setCorrectAnswersCount:()=>number
  correctAnswersCount:number
  }

const QaPage: React.FC<QaPageProps> = ({ onFinishTest ,correctAnswersCount,setCorrectAnswersCount}) => {
  const iconVariants = {
    initial: { y: 0, rotate: 0, scale: 1 },
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 20, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-white to-blue-400 text-white overflow-hidden p-8">
      <motion.div
        className="absolute text-[80px] text-blue-300 opacity-40 top-10 left-5"
        variants={iconVariants}
        initial="initial"
        animate="animate"
      >
        ❓
      </motion.div>
      <motion.div
        className="absolute text-[80px] text-blue-400 opacity-40 top-10 right-5"
        variants={iconVariants}
        initial="initial"
        animate="animate"
      >
        ✔️
      </motion.div>
      <motion.div
        className="absolute text-[80px] text-blue-500 opacity-40 bottom-10 left-5"
        variants={iconVariants}
        initial="initial"
        animate="animate"
      >
        ❌
      </motion.div>
      <motion.div
        className="absolute text-[80px] text-blue-600 opacity-40 bottom-10 right-5"
        variants={iconVariants}
        initial="initial"
        animate="animate"
      >
        ❓
      </motion.div>
      <motion.div
        className="absolute text-[80px] text-blue-300 opacity-40 top-1/2 left-2 transform -translate-y-1/2"
        variants={iconVariants}
        initial="initial"
        animate="animate"
      >
        ✔️
      </motion.div>
      <motion.div
        className="absolute text-[80px] text-blue-500 opacity-40 top-1/2 right-2 transform -translate-y-1/2"
        variants={iconVariants}
        initial="initial"
        animate="animate"
      >
        ❌
      </motion.div>
      <motion.div
        className="absolute text-[80px] text-blue-300 opacity-40 top-2 left-1/2 transform -translate-x-1/2"
        variants={iconVariants}
        initial="initial"
        animate="animate"
      >
        ❓
      </motion.div>
      <motion.div
        className="absolute text-[80px] text-blue-400 opacity-40 bottom-2 left-1/2 transform -translate-x-1/2"
        variants={iconVariants}
        initial="initial"
        animate="animate"
      >
        ✔️
      </motion.div>

      <div className="relative bg-white text-gray-700 shadow-2xl rounded-3xl p-10 w-full max-w-2xl transition-all transform rtl z-10">
        <h1 className="text-3xl font-bold text-center mb-6">تست دانش بورسی</h1>
        <p className="text-right mb-8">
          این آزمون به‌منظور سنجش اطلاعات شما در زمینه بورس و سرمایه‌گذاری تهیه
          شده است. با پاسخ به سوالات، می‌توانید دانش خود را ارزیابی کرده و با
          مفاهیم مختلف بازار سرمایه آشنا شوید
        </p>
        <RandomQuiz onFinishTest={onFinishTest} correctAnswersCount={correctAnswersCount} setCorrectAnswersCount={setCorrectAnswersCount}/> 
      </div>
    </div>
  );
};

export default QaPage;
