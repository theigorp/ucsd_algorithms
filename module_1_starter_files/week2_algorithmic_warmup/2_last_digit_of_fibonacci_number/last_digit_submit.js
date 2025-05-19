// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    if (n === 0) {
      return 0;
    }

    let prev = 0n;
    let next = 1n;
    let tmp;

    for (let i = 1; i < n; i++) {
        tmp = Number(getLastDigit(prev + next));
        prev = Number(getLastDigit(next));
        next = tmp;
    }

    return next;
}

function getLastDigit(n) {
    return n.toString().split('').pop();
}

module.exports = fib;
