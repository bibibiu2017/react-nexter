import React from "react";
import styles from "./HomesSection.module.scss";
import HomeCard from "../../components/cards/HomeCard";
import { homes } from "../../data/HomesData";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const HomesSection: React.FC<Props> = ({ className, ...props }) => {
  const classes = `${className} ${styles.homes}`;
  return (
    <div className={classes} {...props}>
      {homes.map((home) => (
        <HomeCard home={home} key={home.id} />
      ))}
    </div>
  );
};

export default HomesSection;
