import Image from "next/image";
import Logo from "@/public/newuserlogo.png";
import Notification from "@/public/notification.png";
import Cart from "@/public/shoppingcart.png";
import { FaBell, FaGavel, FaUser, FaSearch } from 'react-icons/fa';

export default function NewuserNavbar ()  {
    return (
        <>
        <div className="bg-[#e2e2e2] flex justify-between items-center w-full">
          <div className="flex w-40 bg-[#f1f1f1]">
            {/* Logo */}
            <div  className="ml-6">  
              <Image 
                src={Logo} 
                alt="Logo" 
                width={95} 
                height={60} 
                
              />
            </div>
    
          </div>

           
    
          <div className="flex items-center space space-x-8  ">

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
            <Image 
                src={Notification} 
                alt="Logo" 
                width={40} 
                height={60} 
                
              />
              
              <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
            </button>
    
            {/* Notification Icon */}
            <button className="relative">

            <Image 
                src={Cart} 
                alt="Logo" 
                width={40} 
                height={60} 
                
              />
              
              <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
            </button>
    
           
            <div className="flex items-center space-x-2 pr-6">
            <button className="w-24 py-2 border-2 border-[#538e53] border-solid rounded-full bg-[#e2e2e2] text-[#538e53]">
  Login
</button>

             <button className="w-24 py-2 border-2 rounded-full bg-[#538e53] text-white">Sign up</button>
            </div>
          </div>
          
        </div>
    
       
        
    
       
        </>
    )
}
