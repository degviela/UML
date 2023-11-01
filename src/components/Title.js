import React from "react";
import styles from "./Title.module.css";

const Title = () => {
    return (
        <article className={styles.main}>
            <h1 className={`${styles.title} ${styles.rainbowText}`}>Component diagrams</h1>
        </article>
    );
}

export default Title;
