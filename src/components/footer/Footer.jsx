import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subscribeContainer}>
        <p className={styles.text}>Subscribe to our newsletter</p>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter your email"
            className={styles.input}
          />
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>

      <div className={styles.container1}>
        <div>
          <h6>Need Our Support?</h6>
          <p>Help center</p>
          <p>FAQ</p>
          <p>How to purchase an item</p>
          <p>How to sell on Agritech</p>
        </div>
        <div>
          <h6>About Agrictech</h6>
          <p>Privacy policy</p>
          <p>Our location</p>
          <p>Cookies</p>
        </div>
        <div>
          <h6>Payment methods</h6>
          <div className={styles.paymentMethods}>
            <div>
              <div>
                <Image alt="icon" src="/house2.png" width="20" height="20" />
              </div>
              <p>Deposit</p>
            </div>
            <div>
              <div>
                <Image alt="icon" src="/cardpos.png" width="20" height="20" />
              </div>
              <p>Card</p>
            </div>
            <div>
              <div>
                <Image
                  alt="icon"
                  src="/moneychange.png"
                  width="20"
                  height="20"
                />
              </div>
              <p>Transfer</p>
            </div>
            <div>
              <div>
                <Image
                  alt="icon"
                  src="/receiptedit.png"
                  width="20"
                  height="20"
                />
              </div>
              <p>Cheque</p>
            </div>
          </div>
        </div>
        <div>
          <h6>Follow us on:</h6>
          <div className={styles.socialIcons}>
            <div>
              <Image
                alt="FBicon"
                src="/facebookframe215.png"
                width="45"
                height="45"
              />
            </div>
            <div>
              <Image
                alt="Twittericon"
                src="/Twitter-jpeg0.png"
                width="40"
                height="40"
              />
            </div>
            <div>
              <Image
                alt="icon"
                src="/Instagram-jpeg0.png"
                width="40"
                height="40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
