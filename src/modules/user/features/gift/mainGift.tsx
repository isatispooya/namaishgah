import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Gift } from "../../types";
import Gardon from "./gardon";

interface QaAnsewerProps {
  giftData: Gift;
  correctAnswersCount: number;
}

const GiftReward: React.FC<QaAnsewerProps> = ({
  giftData,
  correctAnswersCount,
}) => {
  const { ویسا, بازرگام, مفتول, خاتم, ترمه } = giftData;

  const [actGardon, setActGardon] = useState(false)

  const starsCount = correctAnswersCount + 1;
  if (!actGardon) {
    return(
      <div onClick={()=>setActGardon(true)} className="flex items-center justify-center">
        
      <Gardon />
      </div>
    )
    
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-white to-blue-400 text-white overflow-hidden p-8">
      <div className="relative z-10 bg-white rounded-xl shadow-xl p-12 max-w-lg w-full text-gray-800 text-right">
        <motion.div
          className="absolute top-4 left-4 w-10 h-10 bg-purple-300 rounded-full opacity-50"
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-4 right-4 w-10 h-10 bg-yellow-300 rounded-full opacity-50"
          animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute top-10 right-10 w-8 h-8 bg-pink-300 rounded-full opacity-50"
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          {[...Array(starsCount)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
              animate={{
                opacity: [0.6, 1],
                scale: index === 1 ? 1.4 : 1,
                rotate: [0, 360],
              }}
              transition={{
                delay: 0.5 + index * 0.3,
                duration: 1.5,
                ease: "easeInOut",
              }}
              style={{
                y: index === 1 ? -30 : 10,
                filter: "drop-shadow(0px 0px 8px rgba(255, 215, 0, 0.8))",
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2,
                }}
              >
                <FaStar className="text-yellow-500 mx-1 text-5xl" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="text-3xl font-extrabold text-center text-gray-800 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          ! تبریک، شما برنده شدید
        </motion.h2>

        <motion.p
          className=" font-semibold text-center text-gray-600 mt-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        >
          از همراهی شما سپاسگزاریم
        </motion.p>

        <motion.table
          className="w-full text-right mb-6 border-collapse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          <tbody>
            <tr className="border-b">
              <td className="p-3 text-gray-600">{ویسا}</td>
              <td className="font-bold p-3 text-gray-700">ویسا</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 text-gray-600">{بازرگام}</td>
              <td className="font-bold p-3 text-gray-700">بازرگام</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 text-gray-600">{مفتول}</td>
              <td className="font-bold p-3 text-gray-700">مفتول</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 text-gray-600">{خاتم}</td>
              <td className="font-bold p-3 text-gray-700">خاتم</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-600">{ترمه}</td>
              <td className="font-bold p-3 text-gray-700">ترمه</td>
            </tr>
          </tbody>
        </motion.table>
      </div>
    </div>
  );
};

export default GiftReward;
