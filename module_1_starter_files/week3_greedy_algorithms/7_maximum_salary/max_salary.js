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

function maxSalary(n, digits) {
  const individualDigits = [];

  for (let i = 0; i < n; i++) {
    const digitLength = String(digits[i]).length;
    
    for (let j = 0; j < digitLength; i++) {
      // individualDigits.push(digits[i] % )
    }
  }
}

console.log(maxSalary(5, [89, 215, 6, 7, 9]));
// 8,9,2,1,5,6,7,9 -> 99876512