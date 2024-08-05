import styles from "./postcard.module.css"
import Image from "next/image"
import Link from "next/link"

const PostCard = ({post}) =>{
    return (
        <>
        <div className={styles.container}>
            <div className={styles.topContainer}>
                {post.img && <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" fill className={styles.img}/>
                </div>}
                <div className={styles.sidePanel}>
                    <span>01.01.2024</span>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <h1 className={styles.imgTitle}>{post.title}</h1>
                <p className={styles.imgDesc}>{post.body}</p>
                <Link href={`/blog/${post.slug}`} className={styles.link}>READ MORE</Link>
            </div>
        </div>
        </>
    )
};

export default PostCard;