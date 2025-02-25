import Image from "next/image";
import styles from "./about.module.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  const aboutText = `
   Discover a world of possibilities in agriculture. Whether you're looking for the finest produce or unique agricultural products, our platform connects you with trusted sellers, ensuring quality and freshness with every order, Discover a world of possibilities in agriculture. Whether you're looking for the finest produce or unique agricultural products, our platform connects you with trusted sellers, ensuring quality and freshness with every order., Discover a world of possibilities in agriculture. Whether you're looking for the finest produce or unique agricultural products, our platform connects you with trusted sellers, ensuring quality and freshness with every order.
   `;

  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Us</h2>
          <p className={styles.desc}>{aboutText}</p>
        </div>
        <div className={styles.aboutImgContainer}>
          <Image
            src="/videoabout.png"
            alt="About Image"
            layout="responsive"
            width={1600}
            height={900}
            className={styles.img}
          />
        </div>
      </section>

      <section className={styles.missionContainer}>
        <div className={styles.missionImgContainer}>
          <Image
            src="/dartarget.png"
            alt="Mission Image"
            width={200}
            height={200}
            layout="responsive"
            className={styles.img}
          />
        </div>
        <div className={styles.missionTextContainer}>
          <h2 className={styles.subtitle}>Mission</h2>
          <p className={styles.missionText}>{aboutText}</p>
        </div>
      </section>

      <section className={styles.teamContainer}>
        <div className={styles.missionTextContainer}>
          <h2 className={styles.subtitle}>Team</h2>
          <p className={styles.missionText}>{aboutText}</p>
        </div>
        <div className={styles.missionImgContainer}>
          <Image
            src="/teamabout.png"
            alt="Team Image"
            width={300}
            height={200}
            layout="responsive"
            className={styles.img}
          />
        </div>
      </section>

      <div className={styles.buttonContainer}>
        <button className={styles.buttontrans}>Login</button>
        <button className={styles.buttoncolor}>Sign Up</button>
      </div>

      <section className={styles.faqContainer}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <table className={styles.faqTable}>
          <thead>
            <tr>
              <th className={styles.table}>Account and profile</th>
              <th>Orders and shipments </th>
              <th>Shipping and delivery </th>
            </tr>
          </thead>
          <tbody>
            {faqData.map((item, index) => (
              <tr key={index}>
                <td>{item.question}</td>
                <td>{item.answer}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className={styles.faqTable}>
          <thead>
            <tr>
              <th>Account and profile</th>
              <th>Orders and shipments </th>
              <th>Shipping and delivery </th>
            </tr>
          </thead>
          <tbody>
            {faqData.map((item, index) => (
              <tr key={index}>
                <td>{item.question}</td>
                <td>{item.answer}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.faqContainer}>
        <table className={styles.faqTable}>
          <thead>
            <tr>
              <th className={styles.table}>Our Location</th>
              <th> </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {faqData1.map((item, index) => (
              <tr key={index}>
                <td>{item.question}</td>
                <td>{item.answer}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.faqContainer}>
        <table className={styles.faqTable}>
          <thead>
            <tr>
              <th className={styles.table}>Our Official bank account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Image
                  src="/access.png"
                  alt="About Image"
                  layout="responsive"
                  width={1600}
                  height={900}
                  className={styles.img}
                />
              </td>
              <td>
                <Image
                  src="/zenith.png"
                  alt="About Image"
                  layout="responsive"
                  width={1600}
                  height={900}
                  className={styles.img}
                />
              </td>
              <td>
                <Image
                  src="/uba.png"
                  alt="About Image"
                  layout="responsive"
                  width={1600}
                  height={900}
                  className={styles.img}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <Footer />
    </>
  );
};

const faqData = [
  {
    question: "How do I create an account on Agrictech?",
    answer: "How do I place an order for a product?",
    category: "How long does it take for my order to be delivered?",
  },
  {
    question: "How can I update my profile information?",
    answer: "What payment methods are accepted on Agrictech?",
    category: "How much does shipping cost?",
  },
  {
    question: "What should I do if I forgot my password?",
    answer: "How can I track the status of my order?",
    category: "Can I track the shipment of my order?",
  },
];

const faqData1 = [
  {
    question: "No 24, rumokoro outlet opposite hyr, lagos nigeria",
    answer: "No 24, rumokoro outlet opposite hyr, lagos nigeria",
    category: "No 24, rumokoro outlet opposite hyr, lagos nigeria",
  },
  {
    question: "Contact: +2349034145971",
    answer: "Contact: +2349034145971",
    category: "Contact: +2349034145971",
  },
];

export default AboutPage;
