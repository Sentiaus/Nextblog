import PostUser from "@/components/postUser/postUser";
import styles from "./spp.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//     if(!res.ok){
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// }

export const generateMetadata = async ({params}) =>{
    const {slug} = params;
    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.desc,
    }
}

const SinglePostPage = async ({params}) => {

    const {slug} = params;

    const post = await getPost(slug);

    console.log(post);
    return (
        <>
        <div className={styles.container}>
            {post.img && (<div className={styles.imgContainer}>
                <Image src={post.img} fill></Image>
                <p>Author</p>
            </div>)}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div>
                    <div className={styles.metaContainer}>
                        {post && (<Suspense fallback={<div>Loading</div>}>
                            <PostUser userId={post.userId}/>
                        </Suspense>)}
                        <div className={styles.meta}>
                            <span className={styles.metaTitle}>Published</span>
                            <span className={styles.metaText}>{post.createdAt.toString().slice(4,16)}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <p>{post.desc}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default SinglePostPage;