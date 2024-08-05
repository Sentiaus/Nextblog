import styles from "./home.module.css"
import Image from "next/image"
const Home = () => {
  return <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Creative Thoughts Agency.</h1>
            <p className={styles.desc}>Do stuff learn stuff we are all gonna make it eventually even if we die.</p>
            <div className={styles.buttons}>
              <button className={styles.button}>Learn More</button>
              <button className={styles.button}>Contact Us</button>
            </div>
            <div className={styles.brands}>
            <Image src="/brands.png" alt="Brand images" fill className={styles.brandImages}></Image>
          </div>
          </div>
        <div className={styles.imageContainer}>
          <Image src="/hero.gif" alt="Four people putting together a puzzle lightbulb" fill className={styles.gifImage}></Image>
        </div>
  </div>;
};

export default Home;