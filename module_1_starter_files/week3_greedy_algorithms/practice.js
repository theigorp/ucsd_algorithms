function moneyChange(amount) {
  const COIN_DENOMINATIONS = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
  }
  const coinsNeeded = {
    PENNY: 0,
    NICKEL: 0,
    DIME: 0,
  };
  
  while (amount > 0) {
    if (amount < 5) {
      coinsNeeded.PENNY += amount;
      amount = 0;
    } else if (amount < 10) {
      amount = amount % COIN_DENOMINATIONS.NICKEL;
      coinsNeeded.NICKEL += 1;
    } else {
      const remainder = amount % COIN_DENOMINATIONS.DIME;
      coinsNeeded.DIME += (amount - remainder) / COIN_DENOMINATIONS.DIME;
      amount = remainder;
    }
  }

  const coinCount = Object.values(coinsNeeded).reduce((total, current) => total + current, 0);
  return coinCount;
}

// console.log(moneyChange(256));

function fractionalKnapsack(capacity, weights, prices) {
  let lootValue = 0;

  const items = weights.map((weight, index) => ({
    weight,
    price: prices[index],
    pricePerKg: prices[index] / weight,
  }));
  items.sort((a,b) => b.pricePerKg - a.pricePerKg);

  let i = 0;
  while (capacity > 0) {
    if (i === items.length) {
      break;
    }

    if (items[i].weight <= capacity) {
      capacity -= items[i].weight;
      lootValue += items[i].price;
    } else if (capacity >= items[i].weight) {
      capacity -= items[i].weight;
      lootValue += items[i].weight * items[i].pricePerKg;
    } else {
      lootValue += items[i].pricePerKg * capacity;
      capacity = 0;
    }
    i++;
  }

  return lootValue;
}

/*
Being a very busy person, you have exactly T time to do some interesting things and you want to do maximum such things.

You are given an array A of integers, where each element indicates the time a thing takes for completion. You want to calculate the maximum number of things that you can do in the limited time that you have.
*/
function busyGuy(availableTime, tasks) {
  let tasksDone = 0;
  let timeSpent = 0;
  tasks.sort((a,b) => a - b);

  for (const task of tasks) {
    if (timeSpent + task > availableTime) {
      break;
    }
    timeSpent += task;
    tasksDone += 1;
  }

  return tasksDone;
}

// console.log(busyGuy(15, [5, 6, 7]));

function carFueling(distance, milesOnFullTank, gasStations) {
  const isFirstStationCloseEnough = gasStations[0] <= milesOnFullTank;
  const isDestinationReachableFromLastStation = gasStations[gasStations.length - 1] + milesOnFullTank >= distance;
  const areStationsCloseEnough = gasStations.every((station, i) => {
    if (i === gasStations.length - 1 || gasStations[i + 1] - station <= milesOnFullTank) {
      return true;
    }
    return false;
  });
  if (!isFirstStationCloseEnough || !isDestinationReachableFromLastStation || !areStationsCloseEnough) return -1;

  let refills = 0;
  let lastVisitedStation = 0; 
  gasStations.push(distance);

  for (let i = 0; i < gasStations.length; i++) {
    if (i === gasStations.length - 1) {
      // we reached the destination
      return refills;
    }

    const leftoverCapacity = (milesOnFullTank + lastVisitedStation) - gasStations[i];
    if (gasStations[i] + leftoverCapacity < gasStations[i + 1]) {
      refills++;
      lastVisitedStation = gasStations[i];
    }
  }

  return refills;
}

// console.log(carFueling(950, 400, [200, 375, 550, 750])) //T
// console.log(carFueling(950, 400, [200, 200, 200, 200])) // T
// console.log(carFueling(950, 400, [200, 200, undefined, 200]))// T
// console.log(carFueling(950, 400, [0, 0, 0, 0])) // T
// console.log(carFueling(1200, 400, [200, 375, 550, 750, 1100])) // T
// console.log(carFueling(10, 3, [1, 2, 5, 9])) // T
// console.log(carFueling(200, 250, [100, 150])) // T
// console.log(carFueling(650, 350, [300, 450, 500])); // T
// console.log(carFueling(20, 4, [4, 8, 12, 16])); //T
// console.log(carFueling(3, 1, [2])); // T
// console.log(carFueling(10, 5, [3, 7]));// T
