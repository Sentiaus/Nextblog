import { getUser } from "@/lib/data";
import styles from "./postuser.module.css"
import Image from "next/image";

// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

//     if(!res.ok){
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// }

const PostUser = async ({userId}) => {

    const user = await getUser(userId);

    return (<>
                <Image src={user.img ? user.img : "/noavatar.png"} className={styles.authorImage} width={50} height={50}></Image>
                <div className={styles.meta}>
                    <span className={styles.metaTitle}>Author</span>
                    <span className={styles.metaText}>{user.username}</span>
                </div>
            </>
    )
};

export default PostUser;