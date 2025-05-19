function fib(n) {
  if (n <= 1) {
    return n;
  }

  let first = 0n;
  let second = 1n;
  let last;

  for (let i = 1; i < n; i++) {
    last = first + second;
    first = second;
    second = last;
  }

  return last;
}

function fibLastDigit(n) {
  let first = 0n;
  let second = 1n;
  let lastDigit;

  for (let i = 1; i < n; i++) {
    lastDigit = (first + second) % BigInt(10);
    first = second;
    second = lastDigit;
  }

  return lastDigit;
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

function hugeFib(n, m) {
  const pisanoPeriodLength = getPisanoPeriodLength(m);
  const remainder = n % pisanoPeriodLength;
  
  return fib(remainder) % BigInt(m);
}

function lastDigitOfFibSum(n) {
  let previous = 0n;
  let next = 1n;
  let tmp;
  let sum = 1n; // because we skip the first 1 in the fib sequence

  for (let i = 1; i < n + 2; i++) {
    tmp = (previous + next) % 10n;
    sum += tmp;
    previous = next;
    next = tmp;
  }

  return next - 1n;
}

function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  // gcd(a,b) == gcd(aP, b)
  const remainder = a % b;
  return gcd(b, remainder);
}

function lcm(a,b) {
  
}

console.time('time');
console.log(gcd(28851538, 1183019))
console.timeEnd('time');