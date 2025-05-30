// by Igor Pavkovic

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = [];

rl.on('line', (line) => {
  inputs.push(line.trim());

  if (inputs.length === 2) {
    const n = parseInt(inputs[0], 10);
    const digits = inputs[1].split(' ').map(Number);

    if (digits.length !== n) {
      console.error(`Expected ${n} digits, but got ${digits.length}`);
      process.exit(1);
    }

    const result = maxSalary(n, digits);
    console.log(result);
    process.exit();
  }
});
/*
  LOGIC: 
  Compare if two negibouring numbers are in correct order (when they are concatenated what value is bigger) 
*/
function maxSalary(n, numbers) {
  numbers = numbers.map(String);
  numbers.sort((a, b) => {
    if (a + b > b + a) {
      return -1;
    } else {
      return 1;
    }
  })
  return BigInt(numbers.join('')).toString();
}

// console.log(maxSalary(5, [89, 215, 6, 7, 9]));
// 98976215
// console.log(maxSalary(5, [42, 4, 465, 46, 427]));
// console.log(maxSalary(5, [0, 0, 0, 0, 0]));
// 46546442742
