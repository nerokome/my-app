import React from 'react';
import { motion } from 'framer-motion';

const Start = () => {
  return (
    <motion.div
      className="flex flex-col  gap-4 sm:gap-10 items-center justify-center h-[300px]  bg-teal-900 px-4 "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="text-2xl sm:text-4xl text-center sm:text-left  text-gray-300 font-bold"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Be one of us today and get discovered
      </motion.p>

      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <a href='/join'>
          <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-3xl py-2 px-6  font-semibold text-xl text-gray-200 bg-teal-600"
        >
          Start your journey 
        </motion.button>
        </a>
        
      </motion.div>
    </motion.div>
  );
};

export default Start;
