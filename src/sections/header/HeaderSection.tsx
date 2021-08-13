import React from "react";
import styles from "./HeaderSection.module.scss";
import Img from "../../ui/Img";
import { header } from "../../data/HeaderData";

type Props = React.HTMLAttributes<HTMLDivElement>;

const HeaderSection: React.FC<Props> = ({ className, ...props }) => {
  const classes = `${className ? className : className} ${styles.header}`;
  const btnClasses = `btn ${styles.header__btn}`;
  const { logo, title, subtitle, buttonText, seenOn } = header;
  return (
    <header {...props} className={classes}>
      <Img path={logo.path} alt={logo.alt} className={styles.header__logo} />
      <h3 className={"heading-3"}>{title}</h3>
      <h1 className={"heading-1"}>{subtitle}</h1>
      <button className={btnClasses}>{buttonText}</button>
      <div className={styles[`header__seen-on-text`]}>{seenOn.text}</div>
      <div className={styles[`header__seen-on-logos`]}>
        {seenOn.logos.map((logo) => (
          <Img path={logo.path} alt={logo.alt} key={logo.path} />
        ))}
      </div>
    </header>
  );
};

export default HeaderSection;
