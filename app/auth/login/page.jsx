"use client";
import React from 'react'
import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from 'next/link';

const page = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      <div
        className="md:w-1/2 w-full bg-cover bg-center flex flex-col justify-center items-center text-white p-8"
        style={{ backgroundImage: "url('/dram.png')" }}
      >
         <Link href="/home">
          <Image
            src="/yattr.png"
            alt="SCAH Logo"
            width={80}
            height={30}
            priority
            className="object-contain"
          />
        </Link>
        <div className="p-6 rounded-lg text-center max-w-sm">
          
          <h1 className="text-3xl font-bold">Welcome to SCAH</h1>
          <p className="mt-2 text-sm">
            The ultimate platform for football scouts to connect with talents.
          </p>
      
        </div>
      </div>

      {/* Right Section - Sign In Form */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-16">
        <div className="max-w-xl w-full mx-auto">
          <h2 className="text-2xl font-semibold flex items-center justify-center mt-10 text-teal-900">Sign in</h2>
          <h3 className="text-3xl font-bold text-teal-800 mt-15">
            Welcome Back
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-teal-600 focus:ring-teal-600 sm:text-sm"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-teal-600 focus:ring-teal-600 sm:text-sm"
              />
              <div className="text-right mt-1">
                <a
                  href="/auth/forgot"
                  className="text-sm text-teal-700 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            
            <button
              type="submit"
              className="w-full bg-teal-900 text-white py-2 px-4 rounded-md hover:bg-green-800 transition"
            >
              Sign In
            </button>
          </form>

          
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          
          <button
            className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition"
          >
            <FcGoogle className="mr-2" /> Continue with Google
          </button>

          
          <button
            className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 mt-3 hover:bg-gray-50 transition"
          >
            <FaApple className="mr-2 text-black" /> Continue with Apple
          </button>

          {/* Register Link */}
          <p className="text-sm text-center text-gray-600 mt-5">
            Don’t have an account?{" "}
             <Link href="/auth/register" className="text-teal-700 font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default page
