import Links from '@/components/navbar/links/Links'
import styles from "./navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
    
    return (
        <nav className={styles.container}>
            <Link href="/" className={styles.logo}>Victor</Link>
            <div>
                <Links></Links>
            </div>

        </nav>
    )
}

export default Navbar;