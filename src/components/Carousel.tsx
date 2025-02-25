import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const StaticCarousel = () => {
  return (
    <>
      <div className="bg-[#538e53] text-white py-6">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true} // Enable infinite looping
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Adminlogo.png"
                alt="Farmers"
                width={60}
                height={40}
              />
              <p className="mt-4">
                10,000 <span className="font-bold">Farmers</span>
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Adminlogo.png"
                alt="Transporters"
                width={60}
                height={40}
              />
              <p className="mt-4">
                10,000 <span className="font-bold">Transporters</span>
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <Image src="/Adminlogo.png" alt="Buyers" width={60} height={40} />
              <p className="mt-4">
                10,000 <span className="font-bold">Buyers</span>
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-xl font-bold">1 Million Registered Users</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Carousel ends here  */}

      <div className="flex align-middle justify-around m-3">
        <div>
          <div className="flex">
            <Image src="/marketaccess.png" alt="" width={20} height={20} />
            <span>Market Access</span>
          </div>
          <p>
            Sell your produce with ease. Connect directly with buyers and
            receive competitive offers. Expand your market reach and increase
            profits.
          </p>
        </div>
        <div>
          <div className="flex">
            <Image
              src="/transportationmadesimple.png"
              alt=""
              width={20}
              height={20}
            />
            <span>Transportation Made Simple</span>
          </div>
          <p>
            Secure reliable transport for your goods effortlessly. Our platform
            connects you with trusted transporters for safe and timely
            deliveries.
          </p>
        </div>
        <div>
          <div className="flex">
            <Image
              src="/futuretransporters.png"
              alt=""
              width={20}
              height={20}
            />
            <span>Future for Transporters</span>
          </div>
          <p>
            connect with farmers and buyers, and drive the future of efficient
            and sustainable logistic
          </p>
        </div>
      </div>
    </>
  );
};

export default StaticCarousel;
