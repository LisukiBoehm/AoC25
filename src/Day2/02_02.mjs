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
    const length = n.toString().length;
    let workingValue = n.toString()[0];

    if (workingValue !== n.toString()[n + 1]) {
      let workingValue = n.toString().slice(0, n + 1);
    }
  }
  
  totalInvalid = totalInvalid + numberOfInvalidStrings;

  // console.log('total invalid', totalInvalid);
}

inputData.forEach(data => findInvalidIDs(data));