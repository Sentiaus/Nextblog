import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                VictorDev
            </div>
            <div className={styles.text}>
               Victor creative thoughts agency All rights reserved. 
            </div>

        </div>
    )
}

export default Footer;