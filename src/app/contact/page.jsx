// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import style from "../about/about.module.css";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  const contactText = `Welcome to the Agrictech Help Center! We're here to support you every step of the way. Find answers to your questions, explore helpful guides, and get the assistance 
          you need. We're dedicated to ensuring your Agrictech experience is seamless and successful. Let's grow together!`;

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.subtitle}>Help Center</h1>
            <p className={styles.desc}>{contactText}</p>
          </div>
          <div className={styles.chatsection}>
            <div className={styles.imgCont}>
              <div className={styles.imageText}>
                <h2>AGRICTECH</h2>
                <p>Connecting farmers, buyers and transporters</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="/contactimage.png"
                  alt="customercare"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.formContainer}>
              <form action="" className={styles.form}>
                <p className={styles.liveChat}>Live Chat</p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </form>
            </div>
          </div>
        </section>

        <div className={styles.liveChatContainer}>
          <div className={styles.liveContainInner}>
            <div>
              <Image
                src="/livechat.png"
                width={50}
                height={50}
                alt="livechat"
              />
            </div>
            <p>Live Chat with us</p>
          </div>
          <div className={styles.liveContainInner}>
            <div>
              <Image
                src="/livechat.png"
                width={50}
                height={50}
                alt="livechat"
              />
            </div>
            <div className={styles.hotLine}>
              <p>Hot-line</p>
              <p>09034145971 09034145971 09034145971</p>
            </div>
          </div>
        </div>

        <section className={styles.section}>
          <div>
            <div>
              <Image
                src="/Rectangle186.png"
                width={300}
                height={300}
                alt="li"
              />
            </div>
            <div className={styles.section}>
              <p>How to sell on Agric tech </p>
              <Image
                src="/arrow-right.png"
                width={20}
                height={20}
                alt="livechat"
              />
            </div>
          </div>

          <div>
            <div>
              {" "}
              <Image
                src="/Rectangle187.png"
                width={300}
                height={300}
                alt="livechat"
              />
            </div>
            <div className={styles.section}>
              <p>Payments and orders</p>
              <Image
                src="/arrow-right.png"
                width={20}
                height={20}
                alt="livechat"
              />
            </div>
          </div>

          <div>
            <div>
              {" "}
              <Image
                src="/Rectangle188.png"
                width={300}
                height={300}
                alt="livechat"
              />
            </div>
            <div className={styles.section}>
              <p>How to register as a transporter </p>
              <Image
                src="/arrow-right.png"
                width={20}
                height={20}
                alt="livechat"
              />
            </div>
          </div>

          <div>
            <div>
              <Image
                src="/Frame189.png"
                width={300}
                height={300}
                alt="livechat"
              />
            </div>
            {/* <div className={styles.section}>
              <p>How to buy on Agric tech </p>
              <Image
                src="/arrow-right.png"
                width={20}
                height={20}
                alt="livechat"
              />
            </div> */}
          </div>
        </section>

        <section className={style.faqContainer}>
          <h2 className={style.title}>Frequently Asked Questions</h2>
          <table className={style.faqTable}>
            <thead>
              <tr>
                <th className={style.table}>Account and profile</th>
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

        <section className={style.faqContainer}>
          <table className={style.faqTable}>
            <thead>
              <tr>
                <th className={style.table}>Our Location</th>
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

        <section className={style.faqContainer}>
          <table className={style.faqTable}>
            <thead>
              <tr>
                <th className={style.table}>Our Official bank account</th>
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
                    className={style.img}
                  />
                </td>
                <td>
                  <Image
                    src="/zenith.png"
                    alt="About Image"
                    layout="responsive"
                    width={1600}
                    height={900}
                    className={style.img}
                  />
                </td>
                <td>
                  <Image
                    src="/uba.png"
                    alt="About Image"
                    layout="responsive"
                    width={1600}
                    height={900}
                    className={style.img}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
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

export default ContactPage;
