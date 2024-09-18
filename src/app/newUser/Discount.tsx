import Image from "next/image";
import Tomatoe from "@/public/tomatoes.png"
import Arrow from "@/public/arrowright.png"



function Discount() {
  return (
    <>
        <div className=" bg-white rounded p-2 mt-1 shadow-md">
        <div className="flex justify-between p-2 flex-nowrap">
    <h1 className="text-3xl my-2 font-bold">Discount Sales</h1>
    <div className="flex align-middle justify-center">
        <button className="text-md text-blue-200">See more</button>
    </div>
</div>
       
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-center">
            <div className="mx-4">
                <div className="relative h-36 w-full rounded-lg">        
                  <Image            
                      src={Tomatoe}
                      alt="banana"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                  />       
                </div>
                  <h2 className="text-lg font-bold mt-4">Tomatoe</h2>
                  <p className="text-sm">Discover the world of tomatoes</p>
                  <p className="text-md font-bold">$350</p>
                  <p className="text-gray-500 text-sm mb-2">Moq 50 bags</p>        
              </div>
            <div className="mx-4">
                <div className="relative h-36 w-full rounded-lg">        
                  <Image            
                      src={Tomatoe}
                      alt="banana"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                  />       
                </div>
                  <h2 className="text-lg font-bold mt-4">Tomatoe</h2>
                  <p className="text-sm">Discover the world of tomatoes</p>
                  <p className="text-md font-bold">$350</p>
                  <p className="text-gray-500 text-sm mb-2">Moq 50 bags</p>        
              </div>
            <div className="mx-4">
                <div className="relative h-36 w-full rounded-lg">        
                  <Image            
                      src={Tomatoe}
                      alt="banana"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                  />       
                </div>
                  <h2 className="text-lg font-bold mt-4">Tomatoe</h2>
                  <p className="text-sm">Discover the world of tomatoes</p>
                  <p className="text-md font-bold">$350</p>
                  <p className="text-gray-500 text-sm mb-2">Moq 50 bags</p>        
              </div>
            <div className="mx-4">
                <div className="relative h-36 w-full rounded-lg">        
                  <Image            
                      src={Tomatoe}
                      alt="banana"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                  />       
                </div>
                  <h2 className="text-lg font-bold mt-4">Tomatoe</h2>
                  <p className="text-sm">Discover the world of tomatoes</p>
                  <p className="text-md font-bold">$350</p>
                  <p className="text-gray-500 text-sm mb-2">Moq 50 bags</p>        
              </div>
            <div className="mx-4">
                <div className="relative h-36 w-full rounded-lg">        
                  <Image            
                      src={Tomatoe}
                      alt="banana"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                  />       
                </div>
                  <h2 className="text-lg font-bold mt-4">Tomatoe</h2>
                  <p className="text-sm">Discover the world of tomatoes</p>
                  <p className="text-md font-bold">$350</p>
                  <p className="text-gray-500 text-sm mb-2">Moq 50 bags</p>        
              </div>
            </div>
        </div>
    </>
   
  );
}

export default Discount;