import Image from "next/image";
import styles from "./carousel.module.css";

const StaticCarousel = () => {
  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.slidesWrapper}>
          {/* Slide 1 */}
          <div className={styles.slide}>
            <Image
              src="/Framebuyer3714.png"
              alt="Farmers"
              width={60}
              height={40}
              className={styles.slideImage}
            />
            <div className={styles.slideText}>
              <p className={styles.boldText}>10,000 </p>
              <p>Farmers</p>
            </div>

            {/* <div className={styles.vertical}></div> */}
          </div>

          {/* Slide 2 */}
          <div className={styles.slide}>
            <Image
              src="/Frametransporters.png"
              alt="Transporters"
              width={60}
              height={40}
              className={styles.slideImage}
            />
            <div className={styles.slideText}>
              <p className={styles.boldText}>10,000</p>
              <p>Transporters</p>
            </div>
            {/* <div className={styles.vertical}></div> */}
          </div>

          {/* Slide 3 */}
          <div className={styles.slide}>
            <Image
              src="/Framebuyer3714.png"
              alt="Buyers"
              width={60}
              height={40}
              className={styles.slideImage}
            />
            <div className={styles.slideText}>
              <p className={styles.boldText}>10,000</p>
              <p>Buyers</p>
            </div>
            {/* <div className={styles.vertical}></div> */}
          </div>

          {/* Slide 4 */}
          <div className={styles.slide}>
            <h2 className={styles.heading}>1 Million Registered Users</h2>
          </div>

          {/* Duplicate Slides for Infinite Effect */}
          <div className={styles.slide}>
            <Image
              src="/Framebuyer3714.png"
              alt="Farmers"
              width={60}
              height={40}
              className={styles.slideImage}
            />
            <div className={styles.slideText}>
              <p className={styles.boldText}>10,000 </p>
              <p>Farmers</p>
            </div>
            {/* <div className={styles.vertical}></div> */}
          </div>

          <div className={styles.slide}>
            <Image
              src="/Frametransporters.png"
              alt="Transporters"
              width={60}
              height={40}
              className={styles.slideImage}
            />
            <div className={styles.slideText}>
              <p className={styles.boldText}>10,000</p>
              <p>Transporters</p>
            </div>
            {/* <div className={styles.vertical}></div> */}
          </div>

          <div className={styles.slide}>
            <Image
              src="/Framebuyer3714.png"
              alt="Buyers"
              width={60}
              height={40}
              className={styles.slideImage}
            />
            <div className={styles.slideText}>
              <p className={styles.boldText}>10,000</p>
              <p>Buyers</p>
            </div>
            {/* <div className={styles.vertical}></div> */}
          </div>

          <div className={styles.slide}>
            <h2 className={styles.heading}>1 Million Registered Users</h2>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className={styles.container1}>
        <div className={styles.marketaccess}>
          <div className={styles.market}>
            <Image src="/marketaccess.png" alt="" width={20} height={20} />
            <h5 className={styles.h5}>Market Access</h5>
          </div>
          <p className={styles.p}>
            Sell your produce with ease. Connect directly with buyers and
            receive competitive offers. Expand your market reach and increase
            profits.
          </p>
        </div>
        <div className={styles.madeessay}>
          <div className={styles.market}>
            <Image
              src="/transportationmadesimple.png"
              alt=""
              width={20}
              height={20}
            />
            <h5 className={styles.h5}>Transportation Made Simple</h5>
          </div>
          <p className={styles.p}>
            Secure reliable transport for your goods effortlessly. Our platform
            connects you with trusted transporters for safe and timely
            deliveries.
          </p>
        </div>
        <div className={styles.transporterfuture}>
          <div className={styles.market}>
            <Image
              src="/futuretransporters.png"
              alt=""
              width={20}
              height={20}
            />
            <h5 className={styles.h5}>Future for Transporters</h5>
          </div>
          <p className={styles.p}>
            Connect with farmers and buyers, and drive the future of efficient
            and sustainable logistics.
          </p>
        </div>
      </div>
    </>
  );
};

export default StaticCarousel;
