'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react"; // 👈 import icons

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
    
      <div
        className="md:w-1/2 w-full bg-cover bg-center flex flex-col text-white p-8"
        style={{ backgroundImage: "url('/namee.png')" }}
      >
        <Link href="/home">
          <Image
            src="/yattr.png"
            alt="SCAH Logo"
            width={100}
            height={40}
            priority
            className="object-cover"
          />
        </Link>
        <div className="p-6 rounded-lg flex flex-col items-center justify-center mt-15 text-center w-full">
          <h1 className="text-3xl font-bold">Welcome to SCAH</h1>
          <p className="mt-2 text-sm">
            The ultimate platform for football scouts to connect with talents.
          </p>
        </div>
      </div>

      
      <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-50 p-6 md:p-10">
        <div className="w-full max-w-xl">
          <h2 className="text-xl md:text-3xl font-semibold text-center text-teal-900 mb-6">
            Create an account
          </h2>

          <form className="space-y-6">
          
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="w-full">
                <label className="block text-md font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your name"
                  className="mt-1 w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label className="block text-md font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your name"
                  className="mt-1 w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  onChange={handleChange}
                />
              </div>
            </div>

          
            <div>
              <label className="block text-md font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                onChange={handleChange}
              />
            </div>

            
            <div>
              <label className="block text-md font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            
            <div>
              <label className="block text-md font-medium">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="mt-1 w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

          
            <div>
              <label className="block text-sm font-medium mb-2">Role</label>
              <div className="flex gap-3 flex-wrap">
                {["Scout", "Player"].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setFormData({ ...formData, role })}
                    className={`px-4 py-2 border rounded-md ${
                      formData.role === role
                        ? "bg-emerald-500 text-white"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Select your role in football.
              </p>
            </div>

            
            <button
              type="submit"
              className="w-full bg-teal-900 text-white py-2 px-4 rounded-md hover:bg-green-800 transition"
            >
              Create an account
            </button>
          </form>

          
          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-teal-700 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
