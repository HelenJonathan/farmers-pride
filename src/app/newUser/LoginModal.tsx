"use client";

import { useEffect, useRef } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
  onSignUp: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onClose, onSignUp }) => {
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

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full border p-2 rounded" />
          </div>
          <button className="w-full bg-green-500 text-white p-2 rounded">Login</button>
          <div className="flex items-center justify-between mt-4">
            <button className="flex items-center space-x-2 bg-blue-600 text-white p-2 rounded w-1/2 mr-2">
              <FaFacebook />
              <span>Facebook</span>
            </button>
            <button className="flex items-center space-x-2 bg-red-500 text-white p-2 rounded w-1/2 ml-2">
              <FaGoogle />
              <span>Google</span>
            </button>
          </div>
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <span onClick={onSignUp} className="text-blue-500 cursor-pointer">
              Sign Up
            </span>
          </p>
          <p className="text-center mt-2">
            <span className="text-blue-500 cursor-pointer">
              Forgot Password?
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
