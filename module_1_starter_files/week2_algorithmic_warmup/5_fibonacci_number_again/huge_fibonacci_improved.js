// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getFibMod(n, m));
        process.exit();
    }
}

function getPisanoPeriodLength(n) {
  let previous = 0n;
  let next = 1n;
  let pisanoPeriodLength = 0;

  for (let i = 0; i < n*n; i++) {
      let tmp = (previous + next) % BigInt(n);
      previous = next;
      next = tmp;

      if (previous == 0 && next == 1) {
        pisanoPeriodLength = i + 1;
        break;
      }
  }

  return pisanoPeriodLength;
}

function getFibMod(n, m) {
  const pisanoPeriodOfM = getPisanoPeriodLength(m);
  const remainder = n % pisanoPeriodOfM;

  // covers cases where remainder is 0 and 1, in which case the result will always be 0 or 1
  if (remainder < 2) {
    return remainder;
  }

  // calculate the fibonaci number of the remainder Fibonacci(remainder)
  let prev = 0n;
  let next = 1n;
  let tmp;

  for (let i = 1; i < remainder; i++) {
      tmp = prev + next;
      prev = next;
      next = tmp;
  }

  return Number(next % BigInt(m));
}

module.exports = getFibMod;
