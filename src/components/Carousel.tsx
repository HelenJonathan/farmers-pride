import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Features.module.css";
import "swiper/css";

const StaticCarousel = () => {
  return (
    <>
      <div className="bg-[#538e53] text-white py-6 px-4">
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
            <div className="flex flex-col items-center text-center p-4">
              <Image
                src="/Adminlogo.png"
                alt="Farmers"
                width={60}
                height={40}
                className="w-[60px] h-auto"
              />
              <p className="mt-4 text-sm md:text-base">
                10,000 <span className="font-bold">Farmers</span>
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center p-4">
              <Image
                src="/Adminlogo.png"
                alt="Transporters"
                width={60}
                height={40}
                className="w-[60px] h-auto"
              />
              <p className="mt-4 text-sm md:text-base">
                10,000 <span className="font-bold">Transporters</span>
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center p-4">
              <Image
                src="/Adminlogo.png"
                alt="Buyers"
                width={60}
                height={40}
                className="w-[60px] h-auto"
              />
              <p className="mt-4 text-sm md:text-base">
                10,000 <span className="font-bold">Buyers</span>
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center p-4">
              <h2 className="text-lg md:text-xl font-bold">
                1 Million Registered Users
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Carousel ends here  */}

      <div className={styles.container}>
        {/* Market Access Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconContainer}>
              <Image
                src="/marketaccess.png"
                alt="Market Access Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.cardTitle}>Market Access</h3>
          </div>
          <p className={styles.cardText}>
            Sell your produce with ease. Connect directly with buyers and
            receive competitive offers. Expand your market reach and increase
            profits.
          </p>
        </div>

        {/* Transportation Made Simple Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconContainer}>
              <Image
                src="/transportationmadesimple.png"
                alt="Transportation Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.cardTitle}>Transportation Made Simple</h3>
          </div>
          <p className={styles.cardText}>
            Secure reliable transport for your goods effortlessly. Our platform
            connects you with trusted transporters for safe and timely
            deliveries.
          </p>
        </div>

        {/* Future for Transporters Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconContainer}>
              <Image
                src="/futuretransporters.png"
                alt="Future Transporters Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.cardTitle}>Future for Transporters</h3>
          </div>
          <p className={styles.cardText}>
            Connect with farmers and buyers, and drive the future of efficient
            and sustainable logistics.
          </p>
        </div>
      </div>
    </>
  );
};

export default StaticCarousel;
