import React from "react";
import styles from "./Container.module.scss";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<Props> = ({ children, className, ...props }) => {
  const classes = `${className} ${styles.container}`;
  return <div className={classes}>{children}</div>;
};

export default Container;
