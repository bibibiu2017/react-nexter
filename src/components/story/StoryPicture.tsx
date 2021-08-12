import React from "react";
import styles from "./StoryPicture.module.scss";
import Img from "../../ui/Img";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const StoryPicture: React.FC<Props> = ({className, ...props}) => {
  const classes = `${styles.picture} ${className}`;
  return (
    <div className={classes}>
      <Img path={"story-1.jpeg"} description={"Couple with new house"} className={styles[`img--1`]}/>
      <Img path={"story-2.jpeg"} description={"New house"} className={styles[`img--2`]}/>
    </div>
  );
};

export default StoryPicture;
