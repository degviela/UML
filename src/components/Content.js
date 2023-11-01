import React from 'react';
import styles from '../Content.module.css';
function Content(){

    return(
        <section className={styles.main}>
            <h1>Content</h1>
            <article className={styles.contents}></article>
        </section>
        );
}
export default Content;