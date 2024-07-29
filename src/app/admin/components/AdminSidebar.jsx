"use client"

// components/AdminSidebar.js
import Link from 'next/link';
import { FaTachometerAlt, FaBox, FaUsers, FaChartLine } from 'react-icons/fa';
import { useState } from 'react';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Set to true to show sidebar initially

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`bg-[#FEFEFE] text-[#2B2B2B] h-full fixed top-0 left-0 pt-32 transition-all duration-300 ${isOpen ? 'w-40' : 'w-20'}`}>
      <button onClick={toggleSidebar} className="p-2 focus:outline-none">
        {isOpen ? 'Close' : 'Open'}
      </button>
      <nav className="p-4">
        <ul>
          <li className="mb-2 flex items-center">
            <FaTachometerAlt className="text-xl" />
            {isOpen && (
              <Link href="/admin" className="block py-2 px-4 hover:bg-gray-600">
                Dashboard
              </Link>
            )}
          </li>
          <li className="mb-2 flex items-center">
            <FaBox className="text-xl" />
            {isOpen && (
              <Link href="/admin/products" className="block py-2 px-4 hover:bg-gray-600">
                Products
              </Link>
            )}
          </li>
          <li className="mb-2 flex items-center">
            <FaUsers className="text-xl" />
            {isOpen && (
              <Link href="/admin/users" className="block py-2 px-4 hover:bg-gray-600">
                Customers
              </Link>
            )}
          </li>
          <li className="mb-2 flex items-center">
            <FaChartLine className="text-xl" />
            {isOpen && (
              <Link href="/admin/orders" className="block py-2 px-4 hover:bg-gray-600">
                Sales
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

