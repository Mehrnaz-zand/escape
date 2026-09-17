import type { Destination } from "../types/Destination";

const destinations: Destination[] = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    description:
      "A romantic city full of cafés, museums, shopping and beautiful architecture.",
    price: 700,
    dogFriendly: false,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },

  {
    id: 2,
    name: "Amsterdam",
    country: "Netherlands",
    description:
      "Canals, museums, stylish cafés and lively neighborhoods for an easy weekend escape.",
    price: 650,
    dogFriendly: false,
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017",
  },

  {
    id: 3,
    name: "Antwerp",
    country: "Belgium",
    description:
      "A stylish Belgian city known for fashion, great food and beautiful historic streets.",
    price: 500,
    dogFriendly: false,
    image: "https://images.unsplash.com/photo-1559113202-c916b8e44373",
  },

  {
    id: 4,
    name: "Cologne",
    country: "Germany",
    description:
      "A relaxed city on the Rhine with impressive architecture, cafés and plenty to explore.",
    price: 450,
    dogFriendly: true,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  },

  {
    id: 5,
    name: "Luxembourg",
    country: "Luxembourg",
    description:
      "A peaceful destination with dramatic views, old streets and lots of green space.",
    price: 550,
    dogFriendly: true,
    image: "https://images.unsplash.com/photo-1565073624497-7144969d0c00",
  },

  {
    id: 6,
    name: "Barcelona",
    country: "Spain",
    description:
      "A sunny city combining beaches, food, architecture, nightlife and shopping.",
    price: 750,
    dogFriendly: true,
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
  },

  {
    id: 7,
    name: "Brussels",
    country: "Belgium",
    description:
      "A lively capital with beautiful squares, chocolate, restaurants and European culture.",
    price: 500,
    dogFriendly: true,
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89",
  },

  {
    id: 8,
    name: "Lisbon",
    country: "Portugal",
    description:
      "Colorful streets, viewpoints, warm weather and excellent food by the Atlantic.",
    price: 600,
    dogFriendly: true,
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
  },

  {
    id: 9,
    name: "Rome",
    country: "Italy",
    description:
      "Ancient history, beautiful streets and some of the best food for a long weekend.",
    price: 700,
    dogFriendly: true,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
  },

  {
    id: 10,
    name: "Copenhagen",
    country: "Denmark",
    description:
      "A stylish city with beautiful design, great restaurants, cafés and waterfront walks.",
    price: 850,
    dogFriendly: true,
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc",
  },
];

export default destinations;
