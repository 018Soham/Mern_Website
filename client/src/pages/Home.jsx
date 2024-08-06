import React from 'react';
import styles from './Home.module.css';

 const Home = () => {
  return (
    <main>
      <section className={styles.sectionHero}>
        <div className={`${styles.container} ${styles.gridTwoCols}`}>
          <div className={styles.heroContent}>
            <p>We are the World Best IT Company</p>
            <h1>Welcome to Soham's Technical</h1>
            <p>
              Are you ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Thapa Technical,
              we specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className={styles.btnGroup}>
              <a href="/contact">
                <button className={styles.btn}>connect now</button>
              </a>
              <a href="/services">
                <button className={`${styles.btn} ${styles.secondaryBtn}`}>learn more</button>
              </a>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img
              src="/images/Home.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home