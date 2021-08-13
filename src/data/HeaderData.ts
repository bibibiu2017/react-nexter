import { ImgType } from "../ui/Img";

type Header = {
  title: string;
  subtitle: string;
  buttonText: string;
  logo: ImgType;
  seenOn: {
    text: string;
    logos: ImgType[];
  };
};

const header: Header = {
  title: "Your own home:",
  subtitle: "The ultimate personal freedom",
  buttonText: "View our properties",
  logo: {
    path: "logo.png",
    alt: "Nexter Logo",
  },
  seenOn: {
    text: "Seen on",
    logos: [
      {
        path: "logo-bbc.png",
        alt: "Seen on bbc",
      },
      {
        path: "logo-forbes.png",
        alt: "Seen on bbc",
      },
      {
        path: "logo-techcrunch.png",
        alt: "Seen on bbc",
      },
      {
        path: "logo-bi.png",
        alt: "Seen on bbc",
      },
    ],
  },
};

export type { Header };
export { header };
