import React from "react";
import Container from "../../layout/Container/Container";
import styles from "./HomeView.module.scss";
import Features from "../../components/Features/Features";

type Props = {};

const HomeView: React.FC<Props> = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.sidebar}>Sidebar</div>
      <header className={styles.header}>Header</header>
      <div className={styles.realtors}>Top 3 realtors</div>
      <section className={styles.features}>
        <Features />
      </section>
      <div className={styles.story__pictures}>Pictures</div>
      <div className={styles.story__content}>Content</div>
      <section className={styles.homes}>Homes</section>
      <section className={styles.gallery}>Gallery</section>
      <div className={styles.footer}>Footer</div>
    </Container>
  );
};

export default HomeView;
