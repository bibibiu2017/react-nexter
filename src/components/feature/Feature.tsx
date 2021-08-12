import React from "react";
import styles from "./Feature.module.scss";
import Svg from "../../ui/Svg";
import {Feature as FeatureType} from "../../data/FeatureData";

type Props = {
  feature: FeatureType;
};

const Feature: React.FC<Props> = (props) => {
  const {icon, heading, description} = props.feature;
  return (
    <div className={styles.feature}>
      <Svg name={icon} className={styles.feature__icon}/>
      <h4 className={"heading-4 heading-4--dark"}>{heading}</h4>
      <p className={styles.feature__text}>{description}</p>
    </div>
  );
};

export default Feature;
