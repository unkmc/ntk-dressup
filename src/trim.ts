import * as fs from 'fs';
import * as fullData from './real_itemshop.json';

Object.keys(fullData).forEach((key) => {
  if (key != "version") {
    console.log(`Splicing ${key}`);
    fullData[key].splice(1, fullData[key].length - 1);
  }
})

console.log(`Trimmed:${JSON.stringify(fullData)}`);

fs.writeFileSync("trimmed_itemshop.json", JSON.stringify(fullData, null, 2));
