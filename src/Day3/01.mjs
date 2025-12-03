import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
// console.log(inputData);

let joltage = 0;

const findPair = (bank) => {
  const batteries = bank.split("").slice(0, -1);
  const highestNumber = Math.max(...batteries);

  const indexOfHighestNumber = bank.indexOf(highestNumber);

  let pairedNumber = 1;

  if (indexOfHighestNumber === 0) {
    pairedNumber = Math.max(...bank.split("").slice(1))
  } else if (indexOfHighestNumber === bank.length) {
    pairedNumber = Math.max(...bank.split("").slice(0, -1))
  } else {
    pairedNumber = Math.max(...bank.split("").slice(indexOfHighestNumber + 1, bank.length))
  }

  const pairToAdd = highestNumber.toString() + pairedNumber;

  joltage = joltage + Number(pairToAdd);
};

inputData.forEach(input => findPair(input));

console.log('joltage', joltage);
