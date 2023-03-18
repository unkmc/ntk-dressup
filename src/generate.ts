import * as fs from 'fs';
import { ItemShopData, ShopEntry } from './Classes';
import { PART_MAXIMUM, PART_NAME, PART_ID, PART_MINIMUM, TILE_MAXIMUM, PART_TILE } from './Constants';
import { spawn } from 'child_process';

const container: ItemShopData = {
  version: "230316-064813",
  main: [],
  usable_items: [],
  weapons: [],
  mounts: [],
  face: [],
  head: [],
  mantle: [],
  necklaces: [],
  coats: [],
  shoes: [],
  specialty_sets: [],
}

// Populate equipment, etc
function populate(entries: ShopEntry[], partKey) {
  for (var index = PART_MINIMUM[partKey]; index < PART_MAXIMUM[partKey]; index++) {
    entries.push({
      name: `${PART_NAME[partKey]} ${index}`,
      tile: PART_TILE[partKey],
      color: 0,
      items: [{
        part: PART_ID[partKey],
        tile: index,
        color: 0,
        gender: 2,
      }]
    })
  };
}
populate(container.weapons, "WEAPON");
populate(container.weapons, "SHIELD");
populate(container.mounts, "MOUNT");
populate(container.face, "FACE_A");
populate(container.face, "FACE_B");
populate(container.head, "HELMET");
populate(container.head, "HAIR");
populate(container.head, "HAT_AND_WIG");
populate(container.mantle, "MANTLE");
populate(container.necklaces, "NECK");
populate(container.coats, "ARMOR");
populate(container.shoes, "SHOES");

// Populate tiles 
for (var index = 0; index < TILE_MAXIMUM; index++) {
  container.usable_items.push({
    name: `Tile ${index}`,
    tile: index,
    color: 0,
    items: []
  });
  container.main.push({
    name: `Tile ${index}`,
    tile: index,
    color: 0,
    items: []
  })
};

fs.writeFileSync(
  "C:\\Program Files (x86)\\KRU\\NexusTK\\itemshop.json",
  JSON.stringify(container, null, 2)
);
spawn("C:\\Program Files (x86)\\KRU\\NexusTK\\NexusTK.exe");
