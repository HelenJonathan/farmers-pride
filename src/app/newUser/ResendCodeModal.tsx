"use client";

import { useEffect, useRef } from 'react';

interface ResendCodeModalProps {
  show: boolean;
  onClose: () => void;
  onResendCode: () => void;
}

const ResendCodeModal: React.FC<ResendCodeModalProps> = ({ show, onClose, onResendCode }) => {
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
      <div ref={modalRef} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-4">Resend Confirmation Code</h2>
        <p>We will send a new confirmation code to your email.</p>
        <button className="w-full bg-green-500 text-white p-2 rounded mt-4" onClick={onResendCode}>
          Resend Code
        </button>
        <p className="text-center mt-4 text-blue-500 cursor-pointer" onClick={onClose}>
          Cancel
        </p>
      </div>
    </div>
  );
}

export default ResendCodeModal
