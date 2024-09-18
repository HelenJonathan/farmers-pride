"use client";

import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/newuserlogo.png';
import Notification from '@/public/notification.png';
import Cart from '@/public/shoppingcart.png';
import { FaSearch } from 'react-icons/fa';
import SignUpModal from './SignUpModal';
import ConfirmationCodeModal from './ConfirmationCodeModal';
import ResendCodeModal from './ResendCodeModal';
import LoginModal from './LoginModal';

export default function NewuserNavbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showResend, setShowResend] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleLoginClose = () => setShowLogin(false);
  const handleSignUpClose = () => setShowSignUp(false);
  const handleShowSignUp = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };
  const handleShowConfirmation = () => {
    const code = generateConfirmationCode();
    setConfirmationCode(code);
    console.log(`Generated confirmation code: ${code}`);
    setShowConfirmation(true);
  };
  const handleCloseConfirmation = () => setShowConfirmation(false);
  const handleShowResend = () => setShowResend(true);
  const handleCloseResend = () => setShowResend(false);
  const handleResendCode = () => {
    const code = generateConfirmationCode();
    setConfirmationCode(code);
    console.log(`Resending confirmation code: ${code}`);
    setShowResend(false);
  };
  const generateConfirmationCode = () => {
    return Math.floor(10000 + Math.random() * 90000).toString();
  };

  return (
    <>
      <div className="bg-[#e2e2e2] flex justify-between items-center w-full">
        <div className="flex w-40 bg-[#f1f1f1]">
          {/* Logo */}
          <div className="ml-6">
            <Image src={Logo} alt="Logo" width={95} height={60} />
          </div>
        </div>
        <div className="flex items-center space-x-8">
          {/* Search Field */}
          <div className="flex">
            <input
              type="text"
              className="bg-white text-[#808080] border-2 pl-10 pr-72 py-2 focus:outline-none"
              placeholder="I am looking for..."
            />
            <div className="bg-[#cce5cc] w-10 flex items-center justify-center">
              <FaSearch className="text-gray-400" />
            </div>
          </div>
          {/* Bidding Icon */}
          <button className="relative">
            <Image src={Notification} alt="Notification" width={40} height={60} />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
          </button>
          {/* Notification Icon */}
          <button className="relative">
            <Image src={Cart} alt="Cart" width={40} height={60} />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
          </button>
          <div className="flex items-center space-x-2 pr-6">
            <button onClick={() => setShowLogin(true)} className="w-24 py-2 border-2 border-[#538e53] border-solid rounded-full bg-[#e2e2e2] text-[#538e53]">
              Login
            </button>
            <button onClick={() => setShowSignUp(true)} className="w-24 py-2 border-2 rounded-full bg-[#538e53] text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <SignUpModal show={showSignUp} onClose={handleSignUpClose} onShowConfirmation={handleShowConfirmation} />
      <ConfirmationCodeModal
        show={showConfirmation}
        onClose={handleCloseConfirmation}
        onShowResend={handleShowResend}
        confirmationCode={confirmationCode}
      />
      <ResendCodeModal show={showResend} onClose={handleCloseResend} onResendCode={handleResendCode} />
      <LoginModal show={showLogin} onClose={handleLoginClose} onSignUp={handleShowSignUp} />
    </>
  );
}
