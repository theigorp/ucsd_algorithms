// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    while (true) {
        const arrLength = generateRandomNumberInRange(2, 15)
        console.log(arrLength);

        const array = [];
        for (let i = 0; i < arrLength; i++) {
            array.push(generateRandomNumberInRange(0, 100000));
        }
        console.log(array);

        const result1 = max(array);
        const result2 = maxFake(array);

        if(result1 !== result2) {
            console.error(`Wrong answer! Output of max(): ${result1}. Output of maxFake(): ${result2}`);
            break;
        } else {
            console.log('OK');
        }

    }

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    // write your code here
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] * arr[arr.length - 2];
}

function maxFake(arr) {
    let result = 0;
    const n = arr.length;

    for(let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] * arr[j] > result) {
                result = arr[i] * arr[j];
            }
        }
    }

    return result;
}

function generateRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = max;
