export type Category = {
  name: string;
  subCategories: SubCategory[];
  backgroundImg?: string;
};

export type SubCategory = { name: string; quantity: number };

export const categories: Category[] = [
  { name: "All socks", subCategories: [] },
  {
    name: "Everyday",
    subCategories: [
      { name: "Men", quantity: 25 },
      { name: "Women", quantity: 25 },
    ],
    backgroundImg: "/Daily_Merino_Socks_Women_Silver_Grey_-_White__1_.webp",
  },
  {
    name: "Sports",
    subCategories: [
      { name: "Running", quantity: 25 },
      { name: "Fitness", quantity: 25 },
      { name: "Cycling", quantity: 25 },
      { name: "Hiking", quantity: 25 },
      { name: "Recovery", quantity: 25 },
      { name: "Football", quantity: 25 },
      { name: "Padel", quantity: 25 },
      { name: "Tennis", quantity: 25 },
      { name: "Rowing", quantity: 25 },
      { name: "Hockey", quantity: 25 },
      { name: "Golf", quantity: 25 },
      { name: "Baseball", quantity: 25 },
      { name: "Other sports", quantity: 25 },
      { name: "KWF", quantity: 25 },
      { name: "Skiing", quantity: 25 },
    ],
    backgroundImg: "/Sports_Socks_Mannen_DONKERBLAUW___GEEL.webp",
  },
  {
    name: "Travel",
    subCategories: [
      {
        name: "Men",
        quantity: 25,
      },
      { name: "Women", quantity: 25 },
    ],
    backgroundImg: "/Travel_Socks_Mannen_DONKERBLAUW__1_.webp",
  },
  { name: "Medical", subCategories: [], backgroundImg: "/8.webp" },
];
