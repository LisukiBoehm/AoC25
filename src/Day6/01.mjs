import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
// console.log(inputData);

const operators = inputData[inputData.length - 1].split(" ").filter(item => item !== '');

const results = [];

const multiply = (num, index) => {
  // console.log('multiply', results[index]);

  if (results[index] === undefined) {
    results.push(num)
  } else {
    const newResult = Number(results[index]) * num;
    results.splice(index, 1, newResult);
    // console.log('new result', newResult)
  }
  // console.log('results', results)
}

const addNumber = (num, index) => {
  // console.log('add');
  if (!results[index]) {
    results.push(num)
  } else {
    const newResult = Number(results[index]) + num;
    results.splice(index, 1, (newResult));
    // console.log('new result', newResult)
  }

  // console.log('results', results)
}

const calculate = input => {
  const workingInput = input.split(" ").filter(item => item !== '');

  for (let n = 0; n < workingInput.length; n++) {
    const operator = operators[n];
    
    if (operator === '*') {
      multiply(Number(workingInput[n]), n)
    } else if (operator === '+') {
      addNumber(Number(workingInput[n]), n);
    }
  }
}

inputData.pop()

inputData.forEach(input => calculate(input));

let total = 0;

const calculateResult = () => {
  for (let i = 0; i < results.length; i++) {
    total = total + results[i]
  }
}

calculateResult();

console.log('total', total);