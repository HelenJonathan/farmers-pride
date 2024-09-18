import Image from "next/image";
import Tomatoe from "@/public/tomatoes.png"


function HotSales() {
  return (
    <>
         <h1 className="text-3xl my-2 ml-4 font-bold">Hot Sales</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-center bg-white rounded p-2 shadow-md">
        <div className="mx-2">
            <div className="relative h-36 w-full">        
              <Image            
                src={Tomatoe}
                alt="tomatoes"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
             />       
           </div>
           <h2 className="text-lg font-bold mt-2">Tomatoes</h2>
           <p className="text-gray-500 text-sm mb-2">50 bags sold this month</p>        
        </div>
        <div className="mx-2">
            <div className="relative h-36 w-full">        
              <Image            
                src={Tomatoe}
                alt="tomatoes"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
             />       
           </div>
           <h2 className="text-lg font-bold mt-2">Tomatoes</h2>
           <p className="text-gray-500 text-sm mb-2">50 bags sold this month</p>        
        </div>
        
        <div className="mx-2">
            <div className="relative h-36 w-full">        
              <Image            
                src={Tomatoe}
                alt="tomatoes"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
             />       
           </div>
           <h2 className="text-lg font-bold mt-2">Tomatoes</h2>
           <p className="text-gray-500 text-sm mb-2">50 bags sold this month</p>        
        </div>
        <div className="mx-2">
            <div className="relative h-36 w-full">        
              <Image            
                src={Tomatoe}
                alt="tomatoes"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
             />       
           </div>
           <h2 className="text-lg font-bold mt-2">Tomatoes</h2>
           <p className="text-gray-500 text-sm mb-2">50 bags sold this month</p>        
        </div>
        <div className="mx-2">
            <div className="relative h-36 w-full">        
              <Image            
                src={Tomatoe}
                alt="tomatoes"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
             />       
           </div>
           <h2 className="text-lg font-bold mt-2">Tomatoes</h2>
           <p className="text-gray-500 text-sm mb-2">50 bags sold this month</p>        
        </div>
        <div className="mx-2">
            <div className="relative h-36 w-full">        
              <Image            
                src={Tomatoe}
                alt="tomatoes"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
             />       
           </div>
           <h2 className="text-lg font-bold mt-2">Tomatoes</h2>
           <p className="text-gray-500 text-sm mb-2">50 bags sold this month</p>        
        </div>
        <div className="mx-2">
            <div className="relative h-36 w-full">        
              <Image            
                src={Tomatoe}
                alt="tomatoes"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
             />       
           </div>
           <h2 className="text-lg font-bold mt-2">Tomatoes</h2>
           <p className="text-gray-500 text-sm mb-2">50 bags sold this month</p>        
        </div>
    
    </div>
    </>
   
  );
}

export default HotSales;