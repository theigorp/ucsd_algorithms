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
/*
  LOGIC:
  Starting from 1 will always be a correct greedy choice. Also, by summing each number from 1, we ensure there will be no duplicates.
  We start from 1 and add each consecutive number to our sum variable. If sum is equal to n, simply return k. If it's not equal to n
  then it must be larger because the last element we added (summed) made it greater than n. We will remove that number from the end of
  the array and calculate what's the currentSum (without that number). By subtracting currentSum from n, we get the number we need. If
  k doesn't include that number, we push it to k and return k. If it includes that number, we repeat the process of removing the last
  number, calculating the numberNeeded and pushing it to k (it's a guarantee that it won't be inlcuded in k).
*/
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