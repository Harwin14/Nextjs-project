import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Coose a gallery</h1>
            <div className={styles.items}>
                <Link href="/portfolio/illustrations" className={styles.item}>
                    <span className={styles.title}>illustrations </span>
                </Link>
                <Link href="/portfolio/websites" className={styles.item}>
                    <span className={styles.title}>Websites </span>
                </Link>
                <Link href="/portfolio/application" className={styles.item}>
                    <span className={styles.title}>Application </span>
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;
