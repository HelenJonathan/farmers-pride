// import { Nav, NavLink } from "@/components/Nav"
import Image from "next/image";
import { FaBell, FaGavel, FaUser } from 'react-icons/fa';

const AdminNavbar = () => {

  
  return (
    <>  
    

    <div className="bg-[#f9f9f9] text-[#808080] px-4 flex justify-between items-center top-0 left-0 right-0 z-20 w-full">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div>  
          <Image 
            src="/Adminlogo.png" 
            alt="Logo" 
            width="70"
            height="60" 
            className="mr-2"
          />
        </div>

     

        {/* Search Field */}
        <div className="relative">
          <input
            type="text"
            className="bg-[#f9f9f9] text-[#808080] border-2 rounded-full pl-10 pr-80 py-2 focus:outline-none"
            placeholder="I am looking for,,,"
          />
          
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Bidding Icon */}
        <button className="relative">
          <FaGavel className="text-2xl" />
          <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
        </button>

        {/* Notification Icon */}
        <button className="relative">
          <FaBell className="text-2xl" />
          <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
        </button>

        {/* Profile Section */}
        <div className="flex items-center space-x-2">
          <FaUser className="text-2xl" />
          <span>Profile</span>
        </div>
      </div>
      
    </div>

   
    

   
    </>
  );
};

export default AdminNavbar;
