// by Igor Pavkovic

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = [];
let stops = [];

rl.on('line', (line) => {
  inputs.push(line.trim());

  if (inputs.length === 4) {
    const d = parseInt(inputs[0], 10);
    const m = parseInt(inputs[1], 10);
    const stopsCount = parseInt(inputs[2], 10);
    stops = inputs[3].split(' ').map(Number);

    if (stops.length !== stopsCount) {
      console.error(`Expected ${stopsCount} stops, but got ${stops.length}`);
      process.exit(1);
    }

    const result = carFueling(d, m, stopsCount, stops);
    console.log(result);
    process.exit();
  }
});
/*
  LOGIC:
    Get list of all gas stations that are in range of milesOnFullTank. Choose the last element in that list
    as the gas station we'll use to refill as we're certain that we'll have enough gas to that station.
    Now our starting point is the gas station we just visited (lastVisitedStation) and we need to calculate
    if we have enough fuel to get to our destination (distance) or we need to refill again. Therefore the
    condition //! milesOnFullTank + lastVisitedStation < distance
    If we don't have enough fuel, get the list of all gas stations that are in range of //! milesOnFullTank + lastVisitedStation
    and choose the last element in the list as the gas station that we'll refill in.

    BOUNDS:
      - check if the last gas station is close enough to destination. In case we have to
        refill at the last gas station, we need to make sure that it's in range of milesOnFullTank
      - check if we can make it to the first gas station. If distance to the first gas station is
        bigger than our milesOnFullTank, we can't make it
      - check if the distance between each individual gas station is less than or equal to milesOnFullTank
  
  OPTIMIZATIONS:
    There's a lot of validation initially to be done. Perhaps we can somehow do this inside the loop?
    Validation takes 0(n), and filtering out the stations in range inside the while loop also takes 0(n), 
    making this function to run in O(n^2). Maybe we could avoid filtering somehow by using a for loop?
*/
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
  let lastVisitedStation = 0;

  while (milesOnFullTank + lastVisitedStation < distance) {
    const stationsInRange = gasStops.filter(stop => stop <= milesOnFullTank + lastVisitedStation);
    lastVisitedStation = stationsInRange[stationsInRange.length - 1];
    refillsNeeded++;
  }

  return refillsNeeded;
}

// console.log(carFueling(950, 400, 4, [200, 375, 550, 750]))
// console.log(carFueling(950, 400, 4, [200, 200, 200, 200]))
// console.log(carFueling(950, 400, 4, [200, 200, undefined, 200]))
// console.log(carFueling(950, 400, 4, [0, 0, 0, 0]))
// console.log(carFueling(1200, 400, 5, [200, 375, 550, 750, 1100]))
// console.log(carFueling(10, 3, 4, [1, 2, 5, 9]))
// console.log(carFueling(200, 250, 2, [100, 150]))
// console.log(carFueling(650, 350, 3, [300, 450, 500]));
// console.log(carFueling(20, 4, 4, [4, 8, 12, 16]));
// console.log(carFueling(3, 1, 1, [2]));
// console.log(carFueling(10, 5, 2, [3, 7]));
