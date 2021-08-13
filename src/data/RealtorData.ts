import { ImgType } from "../ui/Img";

type Realtor = {
  image: ImgType;
  name: string;
  sold: number;
};

type Realtors = {
  titleText: string;
  realtors: Realtor[];
};

const titleText = "Top 3 Realtors";
const realtorsData: Realtors = {
  titleText,
  realtors: [
    {
      name: "Erick Feinman",
      sold: 245,
      image: {
        path: "realtor-1.jpeg",
        alt: "Realtor Erick Feinman",
      },
    },
    {
      name: "Kim Brown",
      sold: 212,
      image: {
        path: "realtor-2.jpeg",
        alt: "Realtor Kim Brown",
      },
    },
    {
      name: "Toby Ramsey",
      sold: 198,
      image: {
        path: "realtor-3.jpeg",
        alt: "Realtor Toby Ramsey",
      },
    },
  ],
};

export type { Realtor, Realtors };
export { realtorsData, titleText };
