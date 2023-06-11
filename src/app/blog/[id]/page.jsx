import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        Lorem ipsum dolor sit amet, consecte.
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sapiente molestiae impedit, totam saepe porro
                        cupiditate enim quis corrupti? Natus accusantium maxime
                        ipsum, commodi a ducimus provident! Est laborum
                        exercitationem iste optio ullam deserunt cum quibusdam
                        asperiores, ab aspernatur officiis pariatur vero?
                        Deserunt alias vitae veniam.
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-kota-tengara-musim-panas-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>John Doe</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-kota-tengara-musim-panas-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quis corrupti earum debitis ratione quod
                        reprehenderit voluptates! Labore laboriosam minima ad.
                        Veritatis, ipsa quia molestiae rerum voluptatem possimus
                        et voluptatibus odio recusandae amet quod corrupti in,
                        sapiente doloremque consectetur. Quo, ipsa! Consequatur
                        amet maiores commodi! Minus.
                    </p>
                </div>
        </div>
    );
};

export default BlogPost;
