import React from "react";
import Container from "../../layout/container/Container";
import styles from "./HomeView.module.scss";
import FeaturesSection from "../../sections/features/FeaturesSection";
import StoryContent from "../../components/story/StoryContent";
import StoryPicture from "../../components/story/StoryPicture";
import HomesSection from "../../sections/home/HomesSection";
import GallerySection from "../../sections/gallery/GallerySection";
import FooterSection from "../../sections/footer/FooterSection";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderSection from "../../sections/header/HeaderSection";

type Props = React.HTMLAttributes<HTMLDivElement>;

const HomeView: React.FC<Props> = () => {
  return (
    <Container className={styles.container}>
      <Sidebar className={styles.sidebar} />
      <HeaderSection className={styles.header} />
      <div className={styles.realtors}>Top 3 realtors</div>
      <FeaturesSection className={styles.features} />
      <StoryPicture className={styles.story__pictures}>Pictures</StoryPicture>
      <StoryContent className={styles.story__content} />
      <HomesSection className={styles.homes} />
      <GallerySection className={styles.gallery}>Gallery</GallerySection>
      <FooterSection className={styles.footer} />
    </Container>
  );
};

export default HomeView;
