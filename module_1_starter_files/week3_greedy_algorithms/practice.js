function moneyChange(amount) {
  const COIN_DENOMINATIONS = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
  };
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
  items.sort((a, b) => b.pricePerKg - a.pricePerKg);

  let i = 0;
  while (capacity > 0) {
    if (i === items.length) {
      break;
    }

    if (items[i].weight <= capacity) {
      capacity -= items[i].weight;
      lootValue += items[i].price;
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
  tasks.sort((a, b) => a - b);

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
  const isDestinationReachableFromLastStation =
    gasStations[gasStations.length - 1] + milesOnFullTank >= distance;
  const areStationsCloseEnough = gasStations.every((station, i) => {
    if (i === gasStations.length - 1 || gasStations[i + 1] - station <= milesOnFullTank) {
      return true;
    }
    return false;
  });
  if (
    !isFirstStationCloseEnough ||
    !isDestinationReachableFromLastStation ||
    !areStationsCloseEnough
  )
    return -1;

  let refills = 0;
  let lastVisitedStation = 0;
  gasStations.push(distance);

  for (let i = 0; i < gasStations.length; i++) {
    if (i === gasStations.length - 1) {
      // we reached the destination
      return refills;
    }

    const leftoverCapacity = milesOnFullTank + lastVisitedStation - gasStations[i];
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

function adRevenue(prices, clicks) {
  // sort in decreasing order
  prices.sort((a, b) => b - a);
  clicks.sort((a, b) => b - a);

  let revenue = 0;

  for (let i = 0; i < prices.length; i++) {
    revenue += prices[i] * clicks[i];
  }

  return revenue;
}

// console.log(adRevenue([23], [39]))
// console.log(adRevenue([23], [undefined]))
// console.log(adRevenue([2,3,9], [7,4,2]))
// console.log(adRevenue([2,3,5], [10,20,30]))

function collectingSignatures(segments) {
  const coordinates = [];
  segments.sort((a, b) => a[1] - b[1]);
  let selectedPoint = segments[0][1];

  while (segments.length > 0) {
    const coveredSegments = segments.filter((segment) => selectedPoint >= segment[0]);
    coordinates.push(selectedPoint);
    segments = segments.filter((segment) => !coveredSegments.includes(segment));
    if (segments.length === 0) {
      return coordinates;
    }
    selectedPoint = segments[0][1];
  }
}

function optimizedSignatureCollection(segments) {
  const points = [];
  let i = 0;
  segments.sort((a, b) => a[1] - b[1]);

  while (i !== segments.length) {
    const selectedPoint = segments[i][1];

    while (i !== segments.length && selectedPoint >= segments[i][0]) {
      i++;
    }

    points.push(selectedPoint);
  }

  return points;
}

// console.log(collectingSignatures([[1,3], [2,5], [3,6]]));
// console.log(collectingSignatures([[2,5], [4,7], [1,3], [5,6]]));
// console.time('a')
// console.log(optimizedSignatureCollection([[10,11], [1,3], [2,4], [3,5], [6,7], [7,10], [8,9]]));
// console.timeEnd('a')

function maxPrizes(k) {
  const prizes = [];
  let sum = 0;

  if (k <= 2) {
    return k;
  }

  for (let i = 1; i < k; i++) {
    if (sum + i > k) {
      prizes.pop();
      const sumOfPrizes = prizes.reduce((sum, prize) => sum + prize);
      const lastAward = k - sumOfPrizes;
      prizes.push(lastAward);
      break;
    }
    prizes.push(i);
    sum += i;
  }

  return prizes;
}
// function distributeCandies(n) {
//   const prizes = [];
//   let current = 1;

//   while (n >= current) {
//     prizes.push(current);
//     n -= current;
//     current++;
//   }

//   if (n > 0) {
//     prizes[prizes.length - 1] += n;
//   }

//   return prizes;
// }

// console.time('a')
// console.log(maxPrizes(1000000000))
// console.log(maxPrizes(9999))
// console.log(maxPrizes(0))
// console.timeEnd('a')
// console.log(maxPrizes(8))
// console.log(maxPrizes(45))
// console.log(maxPrizes(60))

function maxSalary(numbers) {
  //? How to code up a custom comparator / sorting function
  //* if A should go before B, sorting function should return -1
  //* if B should go before A, sorting function should return 1
  //* if two values should be considered equal, return 0
  numbers.sort((a, b) => {
    const combinationA = String(a).concat(String(b));
    const combinationB = String(b).concat(String(a));

    return combinationA < combinationB ? 1 : -1;
  });

  return numbers;
}

// console.log(maxSalary([11, 89, 7, 9, 3, 23]));
// 989,732,311
// console.log(maxSalary([44, 48, 59, 39, 95, 5921]));
// 95 59 48 44 39 5921
// console.log(maxSalary([61, 68, 6]));
// 68 6 61
// console.log(maxSalary([4, 427, 42, 46, 465]));
// 465 46 4 427 42

function minimizeMaxLateness(executionTimes, deadlines) {
  const jobs = executionTimes.map((time, index) => ({
    time,
    deadline: deadlines[index]
  }));
  jobs.sort((a,b) => a.deadline - b.deadline);
  // greedy choice is to select the job with the closest deadline first

  const missedDeadlines = [];
  let currentTime = 0;

  for (const job of jobs) {
    currentTime += job.time;

    if (currentTime > job.deadline) {
      const jobLateness = currentTime - job.deadline;
      missedDeadlines.push(jobLateness);
    }
  }

  return missedDeadlines.length ? Math.max(...missedDeadlines) : 0;
}

// console.log(minimizeMaxLateness([2, 1, 2, 3, 4, 3], [8, 9, 15, 6, 9, 14]));
// console.log(minimizeMaxLateness([3, 4, 2], [4, 5, 7]));
// console.log(minimizeMaxLateness([1, 2, 1], [5, 10, 15]));
// console.log(minimizeMaxLateness([5, 5, 5], [3, 4, 5]));
// console.log(minimizeMaxLateness([2, 1, 4, 1], [3, 9, 5, 7]));
// console.log(minimizeMaxLateness([3, 2, 1], [6, 4, 5]));
// console.log(minimizeMaxLateness([0, 0, 0], [1, 2, 3]));
// console.log(minimizeMaxLateness([4], [5]));
