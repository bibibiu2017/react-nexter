import React from "react";
import classNames from "classnames";
import styles from "./Realtors.module.scss";
import { realtorsData } from "../../data/RealtorData";
import Img from "../../ui/Img";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Realtors: React.FC<Props> = ({ className }) => {
  const classes = classNames(className, styles.realtors);
  const { titleText, realtors } = realtorsData;

  return (
    <div className={classes}>
      <div className={styles.realtors}>
        <h3 className={"heading-3"}>{titleText}</h3>
        <div className={styles.realtors__list}>
          {realtors.map(({ name, image, sold }) => (
            <React.Fragment key={name}>
              <Img
                path={image.path}
                alt={image.alt}
                className={styles.realtors__img}
              />
              <div className={styles.realtors__details}>
                <h4 className={"heading-4 heading-4--light"}>{name}</h4>
                <p className={styles.realtors__sold}>{sold} houses sold</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Realtors;
