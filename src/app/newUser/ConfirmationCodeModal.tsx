"use client";

import { useState, useEffect, useRef } from 'react';

interface ConfirmationCodeModalProps {
  show: boolean;
  onClose: () => void;
  onShowResend: () => void;
  confirmationCode: string;
}

const ConfirmationCodeModal: React.FC<ConfirmationCodeModalProps> = ({ show, onClose, onShowResend, confirmationCode }) => {
  const [inputCode, setInputCode] = useState('');
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

  const handleConfirmCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode === confirmationCode) {
      console.log('Code confirmed!');
      onClose();
    } else {
      console.log('Invalid code');
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-4">Enter Confirmation Code</h2>
        <form onSubmit={handleConfirmCode}>
          <div className="mb-4">
            <label className="block text-gray-700">Confirmation Code</label>
            <input
              type="text"
              placeholder="Enter your code"
              className="w-full border bg-[#E2E2E2] text-[#808080] p-2 rounded"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Confirm</button>
        </form>
        <button onClick={onShowResend} className="mt-4 text-blue-500 underline">Resend Code</button>
      </div>
    </div>
  );
}

export default ConfirmationCodeModal;
