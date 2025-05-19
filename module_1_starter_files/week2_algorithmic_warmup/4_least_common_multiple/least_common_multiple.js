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
    const a = parseInt(line.toString().split(' ')[0], 10);
    const b = parseInt(line.toString().split(' ')[1], 10);

    console.log(lcm(a, b));
    process.exit();
  }
}

function getPrimeFactors(n) {
    const factors = [];
    let divisor = 2; // smallest prime number

    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

function createMap(array) {
  const map = {};

  array.forEach((element) => {
    if (Object.hasOwn(map, element)) {
      map[element] += 1;
    } else {
      map[element] = 1;
    }
  });

  return map;
}

function lcm(a, b) {
  // handle 0s input
  const factorsA = getPrimeFactors(a);
  const factorsB = getPrimeFactors(b);

  const mapA = createMap(factorsA);
  const mapB = createMap(factorsB);
  const result = {};

  Object.keys(mapA).forEach((key) => {
    if (Object.hasOwn(mapB, key) && mapB[key] > mapA[key]) {
      result[key] = mapB[key];
    } else {
      result[key] = mapA[key];
    }
  });
  Object.keys(mapB).forEach((key) => {
    if (Object.hasOwn(mapA, key) && mapA[key] > mapB[key]) {
      result[key] = mapA[key];
    } else {
      result[key] = mapB[key];
    }
  });

  const lcmFactors = [];

  for (const [key, value] of Object.entries(result)) {
    for (let i = 0; i < value; i++) {
      lcmFactors.push(key);
    }
  }

  return lcmFactors.reduce((accumulator, currentValue) => {
    return (accumulator *= currentValue);
  }, 1);
}

// gcd is needed to compute lcmFormula
function gcd(a, b) {
  let remainder;

  if (a === 0 || b === 0) {
      return 0;
  }

  while (true) {
      remainder = a % b;
      if (remainder === 0) {
          return b;
      }
      return gcd(b, remainder);
  }
}

function lcmFormula(a, b) {
  return (a * b) / gcd(a,b);
}

console.time('w')
console.log(lcmFormula(492180124210, 5901592152198));
console.timeEnd('w');