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

    console.log(moneyChange(moneyAmount));
    // console.log(recursiveChange(moneyAmount, [1, 5, 10]));
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

function academicChange(money) {
  let numCoins = 0;
  while (money > 0) {
    let maxCoin;
    if (10 < money) {
      maxCoin = 10;
    } else if (5 < money) {
      maxCoin = 5;
    } else {
      maxCoin = 1;
    }

    money -= maxCoin;
    numCoins++;
  }

  return numCoins;
}

function recursiveChange(money, denominations) {
  if (money === 0) {
    return 0;
  }

  let maxCoin = 0;
  for (let coin of denominations) {
    if (coin <= money && coin > maxCoin) {
      maxCoin = coin;
    }
  }

  return 1 + recursiveChange(money - maxCoin, denominations);
}

function moneyChange(money) {
  let numCoins = 0;

  while (money > 0) {
    if (money >= 10) {
      money -= 10;
    } else if (money >= 5) {
      money -= 5;
    } else {
      money -= 1;
    }
    numCoins++;
  }

  return numCoins;
}

/*
CLRS problem statement:
Describe a greedy algorithm to make change consisting of quarters, dimes, nickels, and pennies. Prove that your algorithm yields an optimal solution.
*/