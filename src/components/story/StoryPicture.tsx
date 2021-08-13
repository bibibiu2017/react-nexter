import React from "react";
import styles from "./StoryPicture.module.scss";
import Img from "../../ui/Img";
import classNames from "classnames";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const StoryPicture: React.FC<Props> = ({ className, ...props }) => {
  const classes = classNames(className, styles.picture);
  return (
    <div className={classes} {...props}>
      <Img
        path={"story-1.jpeg"}
        alt={"Couple with new house"}
        className={styles[`picture__img--1`]}
      />
      <Img
        path={"story-2.jpeg"}
        alt={"New house"}
        className={styles[`picture__img--2`]}
      />
    </div>
  );
};

export default StoryPicture;
