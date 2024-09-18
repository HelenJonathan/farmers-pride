"use client";

import { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

interface SignUpModalProps {
  show: boolean;
  onClose: () => void;
  onShowConfirmation: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ show, onClose, onShowConfirmation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate and send confirmation code
    const code = generateConfirmationCode();
    console.log(`Sending confirmation code to ${email}: ${code}`);
    onShowConfirmation();
  };

  const generateConfirmationCode = () => {
    return Math.floor(10000 + Math.random() * 90000).toString();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-4 text-[#2B2B2B] text-center">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-[#2B2B2B]">Full name</label>
            <input type="text" placeholder="E.g John Walker" className="w-full border bg-[#E2E2E2] text-[#808080] p-2 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-[#2B2B2B]">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border bg-[#E2E2E2] text-[#808080] p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-[#2B2B2B]">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="xxxxxxxx"
              className="w-full border bg-[#E2E2E2] text-[#808080] p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="absolute right-3 top-10 cursor-pointer" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
          <div className="flex items-center justify-between my-4">
            <hr className="w-1/4 border-gray-600" />
            <span className="mx-2 text-[#2B2B2B]">Or register with</span>
            <hr className="w-1/4 border-gray-600" />
          </div>
          <div className="flex items-center justify-between">
            <button type="button" className="flex items-center space-x-2 bg-blue-600 text-white p-2 rounded w-1/2 mr-2">
              <FaFacebook />
              <span>Facebook</span>
            </button>
            <button type="button" className="flex items-center space-x-2 bg-red-500 text-white p-2 rounded w-1/2 ml-2">
              <FaGoogle />
              <span>Google</span>
            </button>
          </div>
          <p className="text-center text-[#2B2B2B] mt-4">
            Already have an account?{' '}
            <span onClick={onClose} className="text-blue-500 cursor-pointer">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;
