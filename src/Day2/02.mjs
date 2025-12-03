import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split(',');
// console.log(inputData);


let totalInvalid = 0;

const findInvalidIDs = (idRange) => {
  const splitRange = idRange.split("-");
  const start = splitRange[0];
  const end = splitRange[1];

  let numberOfInvalidStrings = 0;

  for (let n = start; n < Number(end) + 1; n++) {
    const stringLength = n.toString().length;
    if (stringLength % 2 === 0) {
      const firstHalf = n.toString().slice(0, stringLength / 2)
      const secondHalf = n.toString().slice(stringLength / 2)

      if (firstHalf === secondHalf) {
        numberOfInvalidStrings = numberOfInvalidStrings + Number(n)
      }
    }
  }
  
  totalInvalid = totalInvalid + numberOfInvalidStrings;

  console.log('total invalid', totalInvalid);
}

inputData.forEach(data => findInvalidIDs(data));