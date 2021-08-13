import React from "react";

type ImgType = {
  path: string;
  alt: string;
};

type Props = ImgType & React.HTMLAttributes<HTMLImageElement>;

const Img: React.FC<Props> = ({ path, alt, children, ...props }) => {
  const imgSrc = require("../assets/img/" + path).default;

  return (
    <img src={imgSrc} alt={alt} {...props}>
      {children}
    </img>
  );
};

export default Img;
export type { ImgType };
