import React from "react";
import styles from "./FooterSection.module.scss";
import { copyrightText, navigations } from "../../data/FooterData";

type Props = React.HTMLAttributes<HTMLDivElement>;

const FooterSection: React.FC<Props> = ({ className, ...props }) => {
  const classes = `${className ? className : ""} ${styles.footer}`;
  return (
    <footer className={classes} {...props}>
      <ul className={styles.nav}>
        {navigations.map(({ linkText, linkUrl }) => (
          <li className={styles.nav__item} key={linkText}>
            <a href={linkUrl} className={styles.nav__link}>
              {linkText}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>&copy; {copyrightText}</p>
    </footer>
  );
};

export default FooterSection;
