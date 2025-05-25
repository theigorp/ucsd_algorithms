// by Igor Pavkovic

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = [];

rl.on('line', (line) => {
  inputs.push(line.trim());

  if (inputs.length === 3) {
    const length = parseInt(inputs[0], 10);
    const clicks = inputs[1].split(' ').map(Number);
    const prices = inputs[2].split(' ').map(Number);

    if (clicks.length !== length || prices.length !== length) {
      console.error(`Length mismatch: expected ${length} clicks and prices, got ${clicks.length} clicks and ${prices.length} prices.`);
      process.exit(1);
    }

    const result = dot_product(length, clicks, prices);
    console.log(result);
    process.exit();
  }
});
/*
  LOGIC:
    The optimal greedy strategy is to multiply the max value of clicks with the max value of prices - that's how
    we'll get the highest revenue. To ensure we'll always multiple Max(clicks) with Max(prices), we'll sort the
    arrays in ascending order and multiply each element from clicks with it's "neighbor" from prices.
  
  OPTIMIZATIONS:
    Runtime of current implementation is 0(nlogn) becuase of sorting. I don't have ideas for further optimization.
*/
function dot_product(length, clicks, prices) {
  let totalRevenue = 0;

  clicks.sort((a, b) => a - b);
  prices.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    totalRevenue += clicks[i] * prices[i];
  }

  return totalRevenue;
}
