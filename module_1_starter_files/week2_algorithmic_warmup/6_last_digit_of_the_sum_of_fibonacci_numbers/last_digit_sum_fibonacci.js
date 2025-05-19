// by Igor Pavkovic

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     terminal: false
// });

// process.stdin.setEncoding('utf8');
// rl.on('line', readLine);

// function readLine(line) {
//     console.log(lastDigitOfSumOfFibonaci(parseInt(line, 10)));
//     process.exit();
// }

function getFibonacciFastDouble(n) {
  if (n == 0) {
    return [0n, 1n];
  } else {
    const [a, b] = getFibonacciFastDouble(Math.floor(n / 2));
    const c = a * (b * 2n - a);
    const d = a * a + b * b;
    if (n % 2 == 0) {
      return [c,d];
    } else {
      return [d, c + d];
    }
  }
}

function lastDigitOfSumOfFibonaci(n) {
  const result = getFibonacciFastDouble(n)[0];
  return result;
}

console.time('aa')
// console.log(lastDigitOfSumOfFibonaci(100000000000000))
console.log(lastDigitOfSumOfFibonaci(40000000))
console.timeEnd('aa')

module.exports = lastDigitOfSumOfFibonaci;
