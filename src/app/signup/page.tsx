"use client";

import Image from "next/image";
import { useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { LuEye } from 'react-icons/lu';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);

    try {
      // Make POST request to the API
      const res = await axios.post('/api/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle API response
      if (res.status === 201) {
        // Success toast message
        toast.success(res.data.message || "User registered successfully!");
        // Optionally clear the form
        setFullName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
        toast.error("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="flex lg:flex-row md:flex-row">
      <div className="w-1/2 lg:flex md:flex hidden">
        <Image src="/login.jpg" alt="" width={500} height={500} quality={100} className="w-full h-screen" />
      </div>

      <div className="lg:w-1/2 md:w-1/2 w-full h-screen flex flex-col items-center bg-gray-200 pt-6">
        <div className="logo w-full flex justify-center">
          <a href="/">
            <Image src="/Adminlogo.png" alt="" width={500} height={500} quality={100} className="w-20" />
          </a>
        </div>

        <div className="sign_up_form w-3/4">
          <p className="text-xl my-4 text-center">Sign up</p>

          <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
            {/* Full name field */}
            <div className="flex flex-col gap-2 w-full">
              <label>Full name</label>
              <input
                type="text"
                placeholder="Ciroma Chukwuma Adekunle"
                className="bg-transparent p-2 border-2 border-gray-300 text-xs outline-none"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            {/* Email field */}
            <div className="w-full flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="bg-transparent p-2 border-2 border-gray-300 text-xs outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password field */}
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex flex-col gap-2">
                <label>Password</label>
              </div>
              <div className="toggle_password flex w-full items-center border-2 border-gray-300 px-3">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="xxxxxxxxxxxxxxxxxx"
                  className="w-full bg-transparent p-2 text-xs outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                  {showPassword ? <LuEye size={24} className="text-gray-500" /> : <FaRegEyeSlash size={24} className="text-gray-500" />}
                </div>
              </div>
            </div>

            <button className="bg-green-700 text-white p-2 w-full text-center my-3">Sign up</button>
          </form>

          <div className="flex items-center gap-2 my-3">
            <hr className="flex-grow border-t-1 border-gray-400" />
            <p className="whitespace-nowrap text-xs">Or register with</p>
            <hr className="flex-grow border-t-1 border-gray-400" />
          </div>

          <div className="social_icons"></div>

          <p className="text-center text-xs my-6">
            Already have an account? <a href="/signin" className="text-green-600">Login</a>
          </p>
        </div>
      </div>
      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default Signup;
