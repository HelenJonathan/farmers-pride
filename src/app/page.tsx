"use client"

import Image from "next/image";
import NewuserNavbar from "./newUser/NewuserNavbar";
import Navbar from "./newUser/Navbar";
import Arrowright from "@/public/arrowright.png"
import Carousel from "./newUser/Carousel";
import HotSales from "./newUser/Hotsales";
import Biding from "./newUser/Biding";
import Discount from "./newUser/Discount";
import OtherItems from "./newUser/OtherItems";
import Footer from "./newUser/Footer";

export default function Home() {

 

  return (
  <>
  <NewuserNavbar />
  <Navbar />

  <div className="bg-[#e2e2e2] p-6">
    <header className="grid grid-cols-4 gap-4">
      <div className="col-span-1 bg-white flex flex-col h-full">
        <h2 className="py-2 px-2 border-b text-3xl text-center">Category</h2>
        <div className="p-4 flex-grow">
          <div className="py-2 grid grid-cols-2">
            <p>Grains</p>
            <div className="justify-self-end">
              <Image
                src={Arrowright}
                alt="arrow"
                width={20}
                height={40}
              />
            </div>
          </div>
          <div className="py-2 grid grid-cols-2">
            <p>Fishes</p>
            <div className="justify-self-end">
              <Image
                src={Arrowright}
                alt="arrow"
                width={20}
                height={40}
              />
            </div>
          </div>
          <div className="py-2 grid grid-cols-2">
            <p>Tubers</p>
            <div className="justify-self-end">
              <Image
                src={Arrowright}
                alt="arrow"
                width={20}
                height={40}
              />
            </div>
          </div>
          <div className="py-2 grid grid-cols-2">
            <p>Legumes</p>
            <div className="justify-self-end">
              <Image
                src={Arrowright}
                alt="arrow"
                width={20}
                height={40}
              />
            </div>
          </div>
          <div className="py-2 grid grid-cols-2">
            <p>Livestocks</p>
            <div className="justify-self-end">
              <Image
                src={Arrowright}
                alt="arrow"
                width={20}
                height={40}
              />
            </div>
          </div>
          <div className="py-1 grid grid-cols-2">
            <p>Vegetables</p>
            <div className="justify-self-end">
              <Image
                src={Arrowright}
                alt="arrow"
                width={20}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col h-full">
        <Carousel />
      </div>
      <div className="col-span-1 flex flex-col h-full relative">
        <Image
          src="/Cartimage.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex-grow flex items-end p-2">
          <button className="bg-[#538e53] text-white py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
      </div>
    </header>
     
      <div>  
          <HotSales  />
      </div>
   
      <div>
        <Biding />
      </div>
      <div>
        <Discount />
      </div>
      <div>
        <OtherItems />
      </div>
  </div>
    <div>
      <Footer />
    </div>
  
  </>
  );
}
