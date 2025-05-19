function gcd(a, b) {
  let best = 0;

  if (a <= 0 || b <= 0) {
    throw new Error('Both arguments must be non-zero positive numbers!');
  }

  for (let i = 1; i <= Math.min(a,b); i++) {
    if (a % i === 0 && b % i === 0) {
      best = i;
    }
  }

  return best;
}

// O(log(ab))
function euclidGCD(a, b) {
  if (a <= 0 || b <= 0) {
    throw new Error('Both arguments must be non-zero positive numbers!');
  }

  let aPrim = a % b;
  // console.log(`arguments passed in are: ${a}, ${b}`);
  // console.log(`aPrim is ${aPrim}`)
  if(aPrim == 0) {
    // console.log('provera', b);
    return b;
  } else {
    // console.log(`function call: euclidGCD(${b}, ${aPrim})\n`);
    // this reduces the size of numbers by a factor of ~2
    return euclidGCD(b, aPrim);
  }
}

// console.log(gcd(36, 75));
console.time('runtime');
// console.log(euclidGCD(225, 81));
// console.log(euclidGCD(25885048, 19395012));
// console.log(euclidGCD(258850484985, 193950120270));
// console.log(euclidGCD(1248052505, 591055920));
// console.log(euclidGCD(3918848, 1653264));
// console.log(euclidGCD(357, 234));
console.log(gcd(21, -9));
// console.log(gcd(124805250540, 59105592040));
console.timeEnd('runtime');