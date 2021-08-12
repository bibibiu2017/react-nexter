import React from "react";
import styles from "./HomeCard.module.scss";
import Img from "../../ui/Img";
import Svg from "../../ui/Svg";
import { Home as HomeType } from "../../data/HomesData";

type Props = { home: HomeType } & React.HTMLAttributes<HTMLDivElement>;

const HomeCard: React.FC<Props> = ({ className, ...props }) => {
  const classes = `${className ? className : ""} ${styles.home}`;
  const { image, name, rooms, area, location, price } = props.home;
  return (
    <div className={styles.card}>
      <div {...props} className={classes}>
        <Img
          path={image.path}
          description={image.description}
          className={styles.home__img}
        />
        <Svg name={"icon-heart-full"} className={styles.home__like} />
        <h5 className={styles.home__name}>{name}</h5>
        <div className={styles.home__location}>
          <Svg name={"icon-map-pin"} />
          <p>{location}</p>
        </div>
        <div className={styles.home__rooms}>
          <Svg name={"icon-profile-male"} />
          <p>{rooms} rooms</p>
        </div>
        <div className={styles.home__area}>
          <Svg name={"icon-expand"} />
          <p>
            {area} m<sup>2</sup>
          </p>
        </div>
        <div className={styles.home__price}>
          <Svg name={"icon-key"} />
          <p>{price}</p>
        </div>
        <button className={`${styles.home__btn} btn`}>Contact realtor</button>
      </div>
    </div>
  );
};

export default HomeCard;
