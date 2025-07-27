'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Dong from '../../landingpage/components/Dong';
import Image from 'next/image';

const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return setError('Please fill in all fields.');
    }
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-center h-30 w-full bg-black px-4 sm:px-6">
        <motion.div
          className="flex items-center  self-start"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/kep.png"
            alt="SCAH Logo"
            width={160} // md:w-40 = 160px
            height={64} // Adjust based on actual image ratio
            className="w-28 sm:w-36 md:w-40 object-contain"
          />
        </motion.div>
      </div>

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-1 items-center justify-center bg-[#F4F2EE] px-4 sm:px-6 py-8"
      >
        <motion.div
          className="w-full max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl bg-white p-6 sm:p-8 rounded-xl shadow-xl"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center text-teal-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Welcome Back
          </motion.h2>

          {error && (
            <motion.p
              className="text-red-500 text-sm text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-800 focus:outline-none text-sm"
              />
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-800 focus:outline-none text-sm"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 mt-4 bg-teal-900 text-white rounded-md hover:bg-teal-800 transition duration-200 text-sm font-medium"
            >
              Sign In
            </motion.button>
          </form>

          <div className="text-center mt-4 text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <a href="/auth/register" className="text-teal-800 font-medium hover:underline">
              Register
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Dong />
    </div>
  );
};

export default Page;
