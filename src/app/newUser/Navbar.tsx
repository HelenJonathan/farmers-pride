// components/Navbar.js

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white text-black py-4">
      <div className="container mx-auto flex justify-center items-center space-x-8">
        <Link href="/" className="flex items-center hover:text-gray-600">
          <Image src="/Home.png" alt="home" width="20" height="40" />
          <label className="text-sm text-[#538e53] mt-1 ml-1">Home</label>
        </Link>

        <Link href="/" className="flex items-center hover:text-gray-600">
          <Image src="/Favorite.png" alt="fave" width={20} height={40} />
          <label className="text-sm mt-1 ml-1">Favorite</label>
        </Link>

        <Link href="/" className="flex items-center hover:text-gray-600">
          <Image src="/Dashboard.png" alt="dash" width={20} height={40} />
          <label className="text-sm mt-1 ml-1">Dashboard</label>
        </Link>

        <Link href="/" className="flex items-center hover:text-gray-600">
          <Image src="/Truckfast.png" alt="truck" width={20} height={40} />
          <label className="text-sm mt-1 ml-1">Hire transporter</label>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
