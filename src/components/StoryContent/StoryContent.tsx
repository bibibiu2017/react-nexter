import React from "react";
import styles from "./StoryContent.module.scss";
import {storyData} from "../../data/StoryData";

const {content} = storyData;
type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const StoryContent: React.FC<Props> = ({className, ...props}) => {
  const classes = `${className} ${styles.content}`;

  return (
    <div className={classes} {...props}>
      <h3 className={"heading-3 mb-sm"}>{content.heading}</h3>
      <h2 className={"heading-2 heading-2--dark mb-md"}>&ldquo;{content.quote}&rdquo;</h2>
      <p className={styles.content__text}>{content.description}</p>
      <button className="btn">{content.buttonText}</button>
    </div>
  );
};

export default StoryContent;
