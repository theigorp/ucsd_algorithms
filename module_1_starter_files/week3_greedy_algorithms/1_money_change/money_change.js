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
    const moneyAmount = parseInt(line.toString().split(' ')[0], 10);

    console.log(change(moneyAmount));
    process.exit();
  }
}

function change(amount) {
  const coinDenominationsUsed = {
    '1' : 0,
    '5': 0,
    '10': 0,
  };

  let i = 10;
  while (amount > 0) {
    const remainder = amount % i;
    const numberOfCoinsUsed = (amount - remainder) / i;
    coinDenominationsUsed[i] += numberOfCoinsUsed;
    amount -= numberOfCoinsUsed * i;

    if (i == 10) {
      i = 5;
    } else {
      i = 1;
    }
  }

  const coinsUsed = Object.values(coinDenominationsUsed).reduce((total, current) => total + current, 0);
  return coinsUsed;
}