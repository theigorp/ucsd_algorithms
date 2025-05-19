// by Alexander Nikolskiy

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     terminal: false
// });

// process.stdin.setEncoding('utf8');
// rl.on('line', readLine);

// function readLine(line) {
//     if (line !== "\n") {
//         const n = parseInt(line.toString().split(' ')[0], 10);
//         const m = parseInt(line.toString().split(' ')[1], 10);

//         console.log(getFibMod(n, m));
//         process.exit();
//     }
// }

function getFib(n) {
    let prev = 0n;
    let next = 1n;
    let tmp;

    for (let i = 1; i < n; i++) {
        tmp = prev + next;
        prev = next;
        next = tmp;
    }

    return next;
}

// second variant
function getPisanoPeriodLength(n) {
    let previous = 0n;
    let next = 1n;
    let pisanoPeriodLength = 0;

    for (let i = 0; i < n*n; i++) {
        let tmp = (previous + next) % BigInt(n);
        previous = next;
        next = tmp;

        pisanoPeriodLength++;

        if (previous == 0 && next == 1) {
            break;
        }
    }

    return pisanoPeriodLength;
}

// first unoptimized solution
function getPisanoPeriod(n) {
    const pisanoPeriod = [0, 1]; // all periods start with 0 and 1
    const remainders = [];

    for (let i = 2; i < n*n; i++) {
        const fibonacciOfI = getFib(i);
        const remainder = fibonacciOfI % BigInt(n);
        remainders.push(remainder);
        // we subtract 2 because remainders.length - 1 is the index of the remainder we just calculated in the current loop,
        // so in order to get the remiander we previously calculated it needs to be -2
        const previousRemainder = remainders[remainders.length - 2];
        
        // when 0 and 1 are adjacent, that is when 0 is followed by 1, that means that the Pisano period
        // is starting to repeat, which marks the end of the Pisano period.
        if (remainder == 1 && previousRemainder == 0) {
            pisanoPeriod.pop(); // remove the last 0 that was pushed in
            break;
        } else {
            pisanoPeriod.push(remainder);
        }
    }

    return pisanoPeriod.length;
}

function getFibMod(n, m) {
    // FORMULA:
    // To compute, say 2019th Fibonacci number mod 5, we’ll find the remainder of 2019 when divided by 20 (Pisano Period of 5 is 20).
    // 2019 mod 20 is 19. Therefore, F2019 mod 5 = F19 mod 5 = 1. This property is true in general. 
    const pisanoPeriodOfM = getPisanoPeriodLength(m);
    const remainder = n % pisanoPeriodOfM;

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

const biggest = 2816213588n;
// const big = 483162952612010163284885n;
// console.log(big % 1000n);
console.time("Fib Time");
// console.log(getFibMod(115, 1000))
console.log(getFibMod(2816213588, 239))
console.timeEnd("Fib Time");


module.exports = getFibMod;
