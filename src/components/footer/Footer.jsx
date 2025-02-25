import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      {/* Newsletter Subscription */}
      <div className={styles.subscribeContainer}>
        <p className={styles.text}>Subscribe to our newsletter</p>
        <div className={styles.inputContainer}>
          <input
            type="email" // Changed to email for better mobile keyboard
            placeholder="Enter your email"
            className={styles.input}
            aria-label="Email for newsletter"
          />
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>

      {/* Footer Links and Info */}
      <div className={styles.container1}>
        {/* Support Section */}
        <div className={styles.footerSection}>
          <h6 className={styles.sectionTitle}>Need Our Support?</h6>
          <p className={styles.footerLink}>Help center</p>
          <p className={styles.footerLink}>FAQ</p>
          <p className={styles.footerLink}>How to purchase an item</p>
          <p className={styles.footerLink}>How to sell on Agritech</p>
        </div>

        {/* About Section */}
        <div className={styles.footerSection}>
          <h6 className={styles.sectionTitle}>About Agrictech</h6>
          <p className={styles.footerLink}>Privacy policy</p>
          <p className={styles.footerLink}>Our location</p>
          <p className={styles.footerLink}>Cookies</p>
        </div>

        {/* Payment Methods Section */}
        <div className={styles.footerSection}>
          <h6 className={styles.sectionTitle}>Payment methods</h6>
          <div className={styles.paymentMethods}>
            <div className={styles.paymentMethod}>
              <div className={styles.iconWrapper}>
                <Image
                  alt="Deposit icon"
                  src="/house2.png"
                  width={20}
                  height={20}
                />
              </div>
              <p>Deposit</p>
            </div>
            <div className={styles.paymentMethod}>
              <div className={styles.iconWrapper}>
                <Image
                  alt="Card icon"
                  src="/cardpos.png"
                  width={20}
                  height={20}
                />
              </div>
              <p>Card</p>
            </div>
            <div className={styles.paymentMethod}>
              <div className={styles.iconWrapper}>
                <Image
                  alt="Transfer icon"
                  src="/moneychange.png"
                  width={20}
                  height={20}
                />
              </div>
              <p>Transfer</p>
            </div>
            <div className={styles.paymentMethod}>
              <div className={styles.iconWrapper}>
                <Image
                  alt="Cheque icon"
                  src="/receiptedit.png"
                  width={20}
                  height={20}
                />
              </div>
              <p>Cheque</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className={styles.footerSection}>
          <h6 className={styles.sectionTitle}>Follow us on:</h6>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <Image
                alt="Facebook"
                src="/facebookframe215.png"
                width={40}
                height={40}
              />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <Image
                alt="Twitter"
                src="/Twitter-jpeg0.png"
                width={35}
                height={35}
              />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <Image
                alt="Instagram"
                src="/Instagram-jpeg0.png"
                width={35}
                height={35}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
