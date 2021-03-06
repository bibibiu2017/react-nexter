import React from "react";
import styles from "./GallerySection.module.scss";
import Img from "../../ui/Img";
import { gallery } from "../../data/GalleryData";

type Props = React.HTMLAttributes<HTMLDivElement>;

const GallerySection: React.FC<Props> = ({ className, ...props }) => {
  const classes = `${className ? className : className} ${styles.gallery}`;
  const figureClass = styles.gallery__item;

  return (
    <div className={classes} {...props}>
      {gallery.map(({ path, alt }, index) => {
        const galleryItemClass = styles[`gallery__item--${index + 1}`];
        return (
          <figure className={`${figureClass} ${galleryItemClass}`} key={path}>
            <Img path={path} alt={alt} className={styles.gallery__img} />
          </figure>
        );
      })}
    </div>
  );
};

export default GallerySection;
