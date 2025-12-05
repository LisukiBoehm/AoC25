import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').split('\n\n');

const part1 = inputData[0].split('\n');

const part2 = inputData[1].split('\n');

let goodItems = [];

const isSpoiled = (item) => {
  for (let n = 0; n < part1.length; n++) {
    const range = part1[n].split("-");

    if (item >= range[0] && item <= range[1]) {
      if (!goodItems.includes(item)) {
        goodItems.push(item);
      }
    }
  }
}

part2.forEach(foodItem => isSpoiled(Number(foodItem)));

console.log(goodItems.length);