import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
    return (
        <div className={styles.mainContainer}>
            <Link href="/blog/testid" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                         src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-kota-tengara-musim-panas-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}></h1>
                    <p className={styles.desc}></p>
                </div>
            </Link>
            <Link href="/blog/testid" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src=""
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}></h1>
                    <p className={styles.desc}></p>
                </div>
            </Link>
            <Link href="/blog/testid" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src=""
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}></h1>
                    <p className={styles.desc}></p>
                </div>
            </Link>
        </div>
    );
};

export default Blog;
