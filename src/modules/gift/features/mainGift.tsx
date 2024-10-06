import { motion } from 'framer-motion';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const GiftReward: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-white to-blue-500 text-white overflow-hidden p-8">
      {/* Reward Content */}
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-12 max-w-2xl w-full text-gray-800">
        {/* Infinite Motion Bubbles Inside Box */}
        <motion.div
          className="absolute top-4 left-4 w-10 h-10 bg-purple-300 rounded-full opacity-50"
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-4 right-4 w-10 h-10 bg-yellow-300 rounded-full opacity-50"
          animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute top-10 right-10 w-8 h-8 bg-pink-300 rounded-full opacity-50"
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        ></motion.div>

        {/* Reward Title */}
                <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
        >
          {[...Array(3)].map((_, index) => (
            <FaStar key={index} className="text-yellow-500  mx-1 text-5xl" />
          ))}
        </motion.div>
        <motion.h2
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          Congratulations! You've Earned a Reward!
        </motion.h2>
        <motion.table
          className="w-full text-left mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        >
          <tbody>
            <tr>
              <td className="font-bold p-2">Reward Type:</td>
              <td className="p-2">Gift Card</td>
            </tr>
            <tr>
              <td className="font-bold p-2">Value:</td>
              <td className="p-2">$50</td>
            </tr>
            <tr>
              <td className="font-bold p-2">Valid Until:</td>
              <td className="p-2">31st December 2024</td>
            </tr>
            <tr>
              <td className="font-bold p-2">Redeem Code:</td>
              <td className="p-2">ABC123XYZ</td>
            </tr>
            <tr>
              <td className="font-bold p-2">Terms & Conditions:</td>
              <td className="p-2">Applicable for online purchases only.</td>
            </tr>
          </tbody>
        </motion.table>

        {/* Call to Action Button */}
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Redeem Your Reward
        </motion.button>
      </div>
    </div>
  );
};

export default GiftReward;