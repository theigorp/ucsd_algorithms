// by Igor Pavkovic

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
  if (line !== '\n') {
    const number = parseInt(line.toString().split(' ')[0], 10);

    console.log(maxNumberOfPrizes(number));
    process.exit();
  }
}

function getSum(array) {
  if (array.length < 1) return 0;

  let sum = 0;
  // using a for loop is actually faster than .reduce
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function maxNumberOfPrizes(n) {
  const k = [];

  if (n < 3) {
    k.push(n);
    return `${k.length}\n${k.toString().replaceAll(',', ' ')}`;
  }

  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (sum >= n) break;
    k.push(i);
    sum += i;
  }

  const totalSum = getSum(k);

  if (totalSum !== n) {
    const lastElement = k.pop(); // last element is the one that incremented the sum to be > n
    const currentSum = totalSum - lastElement;
    const numberNeeded = n - currentSum;

    if(!k.includes(numberNeeded)) {
      k.push(numberNeeded);
    } else {
      const lastElement = k.pop();
      const newCurrentSum = currentSum - lastElement;
      const numberNeeded = n - newCurrentSum;
      k.push(numberNeeded);
    }
  }

  return `${k.length}\n${k.toString().replaceAll(',', ' ')}`;
}

// console.time('a')
// console.log(maxNumberOfPrizes(1000000000))
// console.log(maxNumberOfPrizes(9999999999))
// console.log(maxNumberOfPrizes(0))
// console.timeEnd('a')
// console.log(maxNumberOfPrizes(8))
// console.log(maxNumberOfPrizes(45))
// console.log(maxNumberOfPrizes(60))