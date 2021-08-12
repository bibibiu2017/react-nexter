import React from "react";

type ImgType = {
  path: string;
  description: string;
};

type Props = ImgType & React.HTMLAttributes<HTMLImageElement>;

const Img: React.FC<Props> = ({ path, description, children, ...props }) => {
  const imgSrc = require("../assets/img/" + path).default;

  return (
    <img src={imgSrc} alt={description} {...props}>
      {children}
    </img>
  );
};

export default Img;
export type { ImgType };
