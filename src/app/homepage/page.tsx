import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import StaticCarousel from "@/components/carousel/Carousel";

const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Empowering Farmers, Buyers, and Transporters with Cutting-Edge
            Technology for a Sustainable Agricultural Ecosystem
          </h1>
          <p className={styles.desc}>Connect, Grow, Strive</p>
          <Link href="/signup" className={styles.buttons}>
            <button className={styles.button}>Register for free</button>
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/Landinghero.png"
            alt="Hero Image"
            fill
            className={styles.heroImg}
            priority
          />
        </div>
      </div>

      {/* Carousel Section */}
      <div className={styles.carouselContainer}>
        <StaticCarousel />
      </div>

      {/* Sections */}
      {[
        {
          img: "/Component568.png",
          title: "Unlock Fresh Opportunities in Agriculture",
          description:
            "Discover a world of possibilities in agriculture. Whether you're looking for the finest produce or unique agricultural products, our platform connects you with trusted sellers, ensuring quality and freshness with every order.",
          keyBenefits: [
            "Wide Selection: Access a diverse range of agricultural products, from farm-fresh produce to artisanal goods.",
            "Direct Access: Connect directly with farmers and sellers, eliminating middlemen and ensuring fair prices.",
            "Secure Transactions: Enjoy safe and transparent transactions, with payment options that suit your preferences.",
            "Efficient Delivery: Get your orders delivered to your doorstep, hassle-free.",
          ],
          linkText: "Register as a buyer",
        },
        {
          img: "/Overview.png",
          title: "Supercharge Your Farming with Technology",
          description:
            "Take your farming operations to the next level. Our platform empowers you with cutting-edge tools and a thriving marketplace to showcase your produce to a wide audience.",
          keyBenefits: [
            "Farm Management: Monitor crops and livestock, receive weather alerts, and optimize your operations.",
            "Market Reach: List your products in our marketplace, attracting buyers from far and wide.",
            "Transportation Made Simple: Secure reliable transporters for safe and timely deliveries of your goods.",
            "Community and Support: Connect with fellow farmers and experts, gaining knowledge and insights.",
          ],
          linkText: "Register as an Agent",
        },
        {
          img: "/Overview1.png",
          title: "Drive the Future of Agricultural Logistics",
          description:
            "Join the vanguard of efficient and sustainable agricultural logistics. Our platform offers you the opportunity to connect with farmers and buyers, unlocking a world of transportation possibilities.",
          keyBenefits: [
            "Transport Opportunities: Find transport jobs, from local deliveries to regional hauls.",
            "Secure Transactions: Enjoy safe and transparent payment methods.",
            "Reliable Partners: Connect with farmers and buyers in need of your services.",
            "Support and Community: Be part of a thriving community, sharing experiences and insights.",
          ],
          linkText: "Register as a Transporter",
        },
      ].map((section, index) => (
        <div
          key={index}
          className={`${styles.container} ${
            index % 2 === 0 ? styles.even : styles.odd
          }`}
        >
          <div className={styles.imgContainer}>
            <Image
              src={section.img}
              alt={section.title}
              fill
              className={styles.heroImg}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.textContainer}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <section className={styles.keyBenefits}>
              <p className={styles.subtitle}>Key Benefits:</p>
              <ul className={styles.ul}>
                {section.keyBenefits.map((benefit, i) => (
                  <li key={i} className={styles.li}>
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>
            <Link href="/" className={styles.link}>
              <span>{section.linkText}</span>
              <Image
                src="/arrow-right.png"
                alt="Arrow Icon"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
