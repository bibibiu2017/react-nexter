import { ImgType } from "../ui/Img";

type Home = {
  id: string;
  name: string;
  location: string;
  rooms: number;
  area: number;
  price: string;
  image: ImgType;
};

const homes: Home[] = [
  {
    id: "h1",
    name: "Beautiful Family House",
    location: "USA",
    area: 325,
    price: "$1,200,000",
    rooms: 5,
    image: {
      path: "house-1.jpeg",
      alt: "House 1",
    },
  },
  {
    id: "h2",
    name: "Modern Glass Villa",
    location: "Canada",
    area: 450,
    price: "$2,750,000",
    rooms: 6,
    image: {
      path: "house-2.jpeg",
      alt: "House 2",
    },
  },
  {
    id: "h3",
    name: "Cozy Country House",
    location: "UK",
    rooms: 4,
    area: 250,
    price: "$850,000",
    image: {
      path: "house-3.jpeg",
      alt: "House 3",
    },
  },
  {
    id: "h4",
    name: "Large Rustical Villa",
    location: "Portugal",
    rooms: 6,
    area: 480,
    price: "$1,950,000",
    image: {
      path: "house-4.jpeg",
      alt: "House 4",
    },
  },
  {
    id: "h5",
    name: "Majestic Palace House",
    location: "Germany",
    rooms: 18,
    area: 4230,
    price: "$9,500,000",
    image: {
      path: "house-5.jpeg",
      alt: "House 5",
    },
  },
  {
    id: "h6",
    name: "Modern Family Apartment",
    location: "Germany",
    rooms: 3,
    area: 180,
    price: "$600,000",
    image: {
      path: "house-6.jpeg",
      alt: "House 6",
    },
  },
];

export type { Home };
export { homes };
