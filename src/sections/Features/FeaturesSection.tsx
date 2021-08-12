import React from "react";
import styles from "./FeaturesSection.module.scss";
import Feature from "../../components/Feature/Feature";
import {features} from "../../data/FeatureData";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const FeaturesSection: React.FC<Props> = ({className, ...props}) => {
  const classes = `${styles.features} ${className ? className : ""}`;
  return (
    <section className={classes} {...props}>
      {features.map((feature) => (
        <Feature feature={feature} key={feature.heading}/>
      ))}
    </section>
  );
};

export default FeaturesSection;
