import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
    console.log(params);
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.categoryName}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        alt=""
                        src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-kota-tengara-musim-panas-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                </div>
            </div>
        </div>
    );
};

export default Category;
