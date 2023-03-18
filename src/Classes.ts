
export class Item {
  part: number;
  tile: number;
  color: number;
  gender: number;
}

export class ShopEntry {
  name: string;
  tile: number;
  color: number;
  items: Item[]
}

export class ItemShopData {
  version: string
  main: ShopEntry[];
  usable_items: ShopEntry[];
  weapons: ShopEntry[];
  mounts: ShopEntry[];
  face: ShopEntry[];
  head: ShopEntry[];
  mantle: ShopEntry[];
  necklaces: ShopEntry[];
  coats: ShopEntry[];
  shoes: ShopEntry[];
  specialty_sets: ShopEntry[];
}

export const shopDataKeys = [
  "main",
  "usable_items",
  "weapons",
  "mounts",
  "face",
  "head",
  "mantle",
  "necklaces",
  "coats",
  "shoes",
  "specialty_sets",
];
