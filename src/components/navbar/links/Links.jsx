"use client"

import styles from "./links.module.css"
import NavLink from './navLink/navLink';
import { useState } from "react";
import Image from "next/image";

const Links = () => {

    
   const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
   ]; 

   const [open,setOpen] = useState(false);
   //Temp vars
   const session = true;
   const isAdmin = false;

   return (
    <div>
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink item={link} key={link.title}></NavLink>
            )))}{
                session ? (
                    <>
                    {isAdmin && <NavLink item={{title:"Admin", path:"/admin"}}></NavLink>}
                    <button className={styles.logout}>Logout</button>
                    </>
                ) : ( 
                <NavLink item={{title:"Login", path: "/login"}}></NavLink>
                )
            }
        </div>
        <Image src="/menu.png" alt="" width={30} height={30} onClick= {() => setOpen((prev) => !prev)} className={styles.menuButton}></Image>
        {
            open && <div className={styles.mobileLinks}>
                {links.map((link=>(
                    <NavLink item={link} key={link.title}></NavLink>
                )))}
            </div>
        }
    </div>
    
    
   )
}

export default Links;