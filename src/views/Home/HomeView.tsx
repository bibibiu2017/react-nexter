import React from "react";
import Container from "../../layout/container/Container";
import styles from "./HomeView.module.scss";
import FeaturesSection from "../../sections/features/FeaturesSection";
import StoryContent from "../../components/story/StoryContent";
import StoryPicture from "../../components/story/StoryPicture";
import HomesSection from "../../sections/home/HomesSection";

type Props = {};

const HomeView: React.FC<Props> = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.sidebar}>Sidebar</div>
      <header className={styles.header}>Header</header>
      <div className={styles.realtors}>Top 3 realtors</div>
      <FeaturesSection className={styles.features} />
      <StoryPicture className={styles.story__pictures}>Pictures</StoryPicture>
      <StoryContent className={styles.story__content} />
      <HomesSection className={styles.homes} />
      <section className={styles.gallery}>Gallery</section>
      <div className={styles.footer}>Footer</div>
    </Container>
  );
};

export default HomeView;
