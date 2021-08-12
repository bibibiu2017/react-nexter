import React from "react";
import styles from "./Sidebar.module.scss";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Sidebar: React.FC<Props> = ({ className, ...props }) => {
  const classes = `${className ? className : ""} ${styles.sidebar}`;
  return (
    <div {...props} className={classes}>
      <button className={styles[`nav-btn`]} />
    </div>
  );
};

export default Sidebar;
