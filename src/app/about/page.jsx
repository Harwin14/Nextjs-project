import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import AboutImg from "../../../public/about.png";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src={AboutImg}
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storyteller</h1>
                    <h2 className={styles.imgDesc}>
                        Handcrafting award winning digital experiences
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We ?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Minus neque, ab ipsa consequatur similique
                        doloribus excepturi doloremque omnis minima illum
                        pariatur harum accusantium nemo amet porro provident
                        quia voluptates obcaecati ratione mollitia corrupti!
                        Facilis?
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed, et at laboriosam hic totam reprehenderit, ut a
                        tempore inventore dolorem nihil. Neque, in. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Ullam,
                        natus suscipit atque iste explicabo provident ab dolore.
                        Rerum labore earum molestias, perspiciatis, quibusdam
                        eos nesciunt mollitia esse molestiae, libero
                        praesentium?
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eos fugiat obcaecati tempora aperiam laudantium
                        minima minus unde molestias ad velit vitae fuga
                        doloremque beatae ipsa modi architecto, harum vel quos!
                        Voluptates culpa deserunt dolores consequatur ipsa rem
                        sunt at vero laboriosam vitae accusamus,
                        <br />
                        <br />
                        - odit iusto velit nulla porro quos rerum sunt at vero
                        laboriosam vitae accusamus,
                        <br />
                        <br />- enim dolor natus praesentium quos aliquid?
                    </p>
                    <Button url="contact" text="Contact"></Button>
                </div>
            </div>
        </div>
    );
};

export default About;
