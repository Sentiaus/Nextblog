import Image from "next/image"
import styles from "./about.module.css"

export const metadata = {
    title: 'About Page',
    description: 'Sample Blog About Page description',
  }

const About = () =>{
    return(
        <>
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
                <p>
                    We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precision.
                    We're the world's. Our special team has the best consulting & finance solution provider.
                    Wide range of web and software development services.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>234 K+</h1>
                        <p>People reached</p>
                    </div>
                    <div className={styles.box}>
                        <h1>5 K+</h1>
                        <p>Services and plugins</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="Man in front of statistics" fill className={styles.aboutImage}></Image>
            </div>
        </div>
        </>
    )
}

export default About;