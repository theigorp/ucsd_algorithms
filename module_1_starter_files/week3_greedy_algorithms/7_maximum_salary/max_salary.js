// by Igor Pavkovic

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const inputs = [];

// rl.on('line', (line) => {
//   inputs.push(line.trim());

//   if (inputs.length === 2) {
//     const n = parseInt(inputs[0], 10);
//     const digits = inputs[1].split(' ').map(Number);

//     if (digits.length !== n) {
//       console.error(`Expected ${n} digits, but got ${digits.length}`);
//       process.exit(1);
//     }

//     const result = maxSalary(n, digits);
//     console.log(result);
//     process.exit();
//   }
// });

function maxSalary(n, numbers) {
  numbers.sort((a, b) => b - a);
  const stringNumbers = numbers.map((number) => String(number));
  const largestNumber = stringNumbers[0];

  // stringNumbers.sort((a,b) => b[1] - a[1]);
  // return stringNumbers;

  for (let i = 0; i < largestNumber.length; i++) {
    // for (const number of stringNumbers) {
    //   console.log(number, i);
    // }
    stringNumbers.sort((a, b) => {
      console.log('i', i);
      console.log('a', a);
      console.log('b', b);
      let aIndex = i;
      let bIndex = i;

      if (!a[i]) {
        console.log('aIndex changed');
        aIndex = a.length - 1;
      }
      if (!b[i]) {
        console.log('bIndex changed');
        bIndex = b.length - 1;
      }

      console.log('aIndex', aIndex);
      console.log('bIndex', bIndex);
      return b[bIndex] > a[aIndex] ? 1 : -1;
    });
  }
  return stringNumbers;
  return ':)';
}

// console.log(maxSalary(5, [89, 215, 6, 7, 9]));
// 98976215
console.log(maxSalary(5, [42, 4, 465, 46, 427]));
// 46546442742
