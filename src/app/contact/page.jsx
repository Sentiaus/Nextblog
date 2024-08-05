// "use client";

import styles from "./contact.module.css";
import Image from "next/image";
// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest"

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})
export const metadata = {
    title: 'Contact Page',
    description: 'Contact Page Description',
  }

const Contact = () =>{
    // const[isClient, setIsClient] = useState(false);
    // const a = Math.random();
    // useEffect(()=>{
    //     setIsClient(true);
    // },[]);
    // console.log(a);
    return(
        <>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/contact.png" alt="Man standing in front of whiteboard" fill className={styles.contactImage}></Image>
            </div>
            {/* {isClient && a} */}
            <div className={styles.formContainer}>
                {/* <HydrationTestNoSSR/> */}
                <form action="" className={styles.form}>
                    <input type="text" placeholder='Name and surname'/>
                    <input type="text" placeholder='Email Address'/>
                    <input type="text" placeholder='Phone Number (Optional)'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message '></textarea>
                    <button className={styles.button}>Send</button>
                </form>
            </div>
        </div>
        </>
    )
};


export default Contact;