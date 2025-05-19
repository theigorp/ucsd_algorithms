// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
console.log('Input:')
rl.on('line', readLine);

function readLine(line) {
    console.log('Output:')
    console.log(fibN(parseInt(line, 10)));
    process.exit();
}
// not working because I pushed only the last digit in memory and tried to get the next Fib number by adding two last digits lol
// actually, this approach was correct but the mistake was that I needed to coerce the result of last digit to a Number - the reason why I kept seeing only 11s is because .pop() returns a string and 1 + 1 is 11 and not 2, that's why it didn't work. But yes, we should only memorize the last digits of the number because last digit of previous and last digit of next when summed together give the correct last digit of the next fib number
function fib(n) {
    const list = [0,1];
    let nextNumber = 0;
    let lastDigit = 0;

    for (let i = 2; i <= n; i++) {
        nextNumber = list[i - 1] + list[i - 2];
        console.log('Next Fibonnaci Number:', nextNumber);
        lastDigit = nextNumber.toString().split('').pop();
        console.log('Last Digit of Number:', lastDigit);
        list.push(lastDigit);
        // list.push(nextNumber);
    }

    console.log('FINAL:', Number(list[n]));
    return Number(list[n]);
}

// bigInt is optional, but works better with it
function fibN(n) {
    let prev = 0;
    let next = 1;
    let tmp;

    for (let i = 1; i < n; i++) {
        tmp = prev + next;
        prev = next;
        next = tmp;
    }

    return next.toString().split('').pop();
}

module.exports = fib;
