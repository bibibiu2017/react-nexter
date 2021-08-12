import React from "react";
import styles from "./Container.module.scss";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<Props> = ({children, className, ...props}) => {
  const classes = `${className ? className : ""} ${styles.container ? styles.container : ""}`;
  return <div className={classes} {...props}>{children}</div>;
};

export default Container;
