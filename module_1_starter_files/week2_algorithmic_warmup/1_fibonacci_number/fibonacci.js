// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fastFib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    const list = [0n,1n];

    for (let i = 2; i <= n; i++) {
        list.push(list[i - 1] + list[i - 2]);
    }

    return list[n];
}

function fastFib(n) {
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

// console.time('aa')
// console.log(fib(900000)) //fib gets stackoverflow for this call but fastFib returns correct
// console.timeEnd('aa')

module.exports = fib;
