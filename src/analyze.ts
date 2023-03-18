import * as fs from 'fs';
import { ItemShopData, ShopEntry, shopDataKeys } from './Classes';
import * as fullData from './real_itemshop.json';

const itemShopData: ItemShopData = fullData;

class Analysis {
  parts: Set<number>;
  tiles: Set<number>;
  colors: Set<number>;
  genders: Set<number>;
}

const analysis: { [key: string]: Analysis } = {};

for (const key of shopDataKeys) {
  if (!analysis[key]) {
    analysis[key] = {
      parts: new Set<number>(),
      tiles: new Set<number>(),
      colors: new Set<number>(),
      genders: new Set<number>(),
    };
  }

  const shopEntries: ShopEntry[] = itemShopData[key];
  for (const entry of shopEntries) {
    for (const item of entry.items) {
      analysis[key].parts.add(item.part)
      analysis[key].tiles.add(item.tile)
      analysis[key].colors.add(item.color)
      analysis[key].genders.add(item.gender)
    }
  }
}

for (const key of shopDataKeys) {
  console.log(`${key}:`);
  console.log(`  parts: ${JSON.stringify(Array.from(analysis[key].parts))}`);
  // console.log(`  tiles: ${JSON.stringify(Array.from(analysis[key].tiles))}`);
  // console.log(`  colors: ${JSON.stringify(Array.from(analysis[key].colors))}`);
  console.log(`  genders: ${JSON.stringify(Array.from(analysis[key].genders))}`);
}

