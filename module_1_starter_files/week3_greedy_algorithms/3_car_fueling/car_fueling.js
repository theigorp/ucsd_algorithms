// by Igor Pavkovic

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const inputs = [];
// let stops = [];

// rl.on('line', (line) => {
//   inputs.push(line.trim());

//   if (inputs.length === 4) {
//     const d = parseInt(inputs[0], 10);
//     const m = parseInt(inputs[1], 10);
//     const stopsCount = parseInt(inputs[2], 10);
//     stops = inputs[3].split(' ').map(Number);

//     if (stops.length !== stopsCount) {
//       console.error(`Expected ${stopsCount} stops, but got ${stops.length}`);
//       process.exit(1);
//     }

//     const result = carFueling(d, m, stopsCount, stops);
//     console.log(result);
//     // rl.close();
//     process.exit();
//   }
// });

function carFueling(distance, milesOnFullTank, stopsCount, gasStops) {
  const isLastStationCloseEnoughToDestination = distance - gasStops[gasStops.length - 1] <= milesOnFullTank;
  const isFirstGasStationCloseEnough = gasStops[0] <= milesOnFullTank;
  const areGasStationsCloseEnough = gasStops.every((stop, i) => {
    if (i === gasStops.length - 1 || gasStops[i + 1] - stop <= milesOnFullTank) {
      return true;
    }
    return false;
  });

  if (!isLastStationCloseEnoughToDestination || !areGasStationsCloseEnough || !isFirstGasStationCloseEnough) {
    return -1;
  }

  let refillsNeeded = 0;

}

// console.log(carFueling(950, 400, 4, [200, 375, 550, 750]))
// console.log(carFueling(950, 400, 4, [200, 200, 200, 200]))
// console.log(carFueling(950, 400, 4, [0, 0, 0, 0]))
// console.log(carFueling(1200, 400, 5, [200, 375, 550, 750, 1100]))
// console.log(carFueling(10, 3, 4, [1, 2, 5, 9]))
// console.log(carFueling(200, 250, 2, [100, 150]))
// console.log(carFueling(650, 350, 3, [300, 450, 500]));
// console.log(carFueling(20, 4, 4, [4, 8, 12, 16]));
// console.log(carFueling(3, 1, 1, [2]));
console.log(carFueling(10, 5, 2, [3, 7]));
