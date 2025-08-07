'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Dong from "../../landingpage/components/Dong";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !password2) {
      return setError("Please fill in all fields.");
    }

    if (password !== password2) {
      setError("Passwords do not match.");
    } else {
      const userData = { name, email, password };
      console.log("Registering user:", userData);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col w-full overflow-x-hidden">
      {/* Logo Section */}
     <div className="flex items-start justify-center h-23  sm:h-30 w-full bg-black ">
             <motion.div
               className="flex  self-start "
               initial={{ x: -50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.6 }}
             >
              <Link href="/home" >
            <Image
            src="/kep.png"
            alt="SCAH Logo"
            width={160} 
            height={64} 
            className="w-28 sm:w-36 md:w-40 object-contain"
          />
        </Link>
             </motion.div>
           </div>
     

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-1 items-center justify-center bg-[#F4F2EE] px-4 sm:px-6 py-10 w-full overflow-x-hidden"
      >
        <motion.div
          className="w-full max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl bg-white p-6 sm:p-8 rounded-xl shadow-xl"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Create an Account
          </motion.h2>

          {error && (
            <motion.p
              className="text-red-500 text-sm mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          <form onSubmit={handleSubmit} className="grid gap-4">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
            >
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                First Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-800 focus:outline-none text-sm"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
            >
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Last Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-800 focus:outline-none text-sm"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
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

            {/* Role */}
            <div>
              <label htmlFor="role" className="block mb-1 text-sm font-medium">
                Role
              </label>
              <select
                id="role"
                className="w-full p-2 rounded-lg py-1 px-3 shadow-md border border-gray-300 shadow-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-800 text-sm"
              >
                <option>Please specify</option>
                <option> Athlete</option>
                <option> Scout</option>
              </select>
            </div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
            >
              <label htmlFor="password" className="block mb-1 text-sm font-medium">
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

            {/* Confirm Password */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="password2" className="block mb-1 text-sm font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="password2"
                  type={showPassword2 ? "text" : "password"}
                  name="password2"
                  placeholder="Confirm your password"
                  value={password2}
                  onChange={handleChange}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-800 focus:outline-none text-sm"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                  onClick={() => setShowPassword2(!showPassword2)}
                >
                  {showPassword2 ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 mt-4 bg-teal-800 text-white rounded-md hover:bg-teal-900 transition duration-200 text-sm font-medium"
            >
              Create an account
            </motion.button>
          </form>

          {/* Login Redirect */}
          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/auth/nero" className="text-teal-800 hover:underline">
              Login
            </a>
          </p>
        </motion.div>
      </motion.div>

      <Dong />
    </div>
  );
};

export default Page;
