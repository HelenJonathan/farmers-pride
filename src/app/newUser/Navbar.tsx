// components/Navbar.js
import { FaHome, FaHeart, FaTachometerAlt, FaTruck } from 'react-icons/fa';
import Home from "@/public/home.png"
import Fave from "@/public/favorite.png"
import Dash from "@/public/dashboard.png"
import Truck from "@/public/truckfast.png"
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white text-black py-4">
      <div className="container mx-auto flex justify-center items-center space-x-8">
        <Link href="/" className="flex items-center hover:text-gray-600">
             <Image 
                src={Home} 
                alt="home" 
                width={20} 
                height={40} 
                
              />
            <label className="text-sm text-[#538e53] mt-1 ml-1">Home</label>
        </Link>

        <Link href="/" className="flex items-center hover:text-gray-600">
             <Image 
                src={Fave} 
                alt="fave" 
                width={20} 
                height={40} 
                
              />
            <label className="text-sm mt-1 ml-1">Favorite</label>
        </Link>

        <Link href="/" className="flex items-center hover:text-gray-600">
             <Image 
                src={Dash} 
                alt="dash" 
                width={20} 
                height={40} 
                
              />
            <label className="text-sm mt-1 ml-1">Dashboard</label>
        </Link>

        <Link href="/" className="flex items-center hover:text-gray-600">
             <Image 
                src={Truck} 
                alt="truck" 
                width={20} 
                height={40} 
                
              />
            <label className="text-sm mt-1 ml-1">Hire transporter</label>
        </Link>
       
        
      </div>
    </nav>
  );
};

export default Navbar;
