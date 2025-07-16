function maxSalary(digits) {
  digits.sort((a,b) => b - a);
  return BigInt(digits.join(''));
}
// console.log(maxSalary([9,1,6,8,9,2,1,5,2,1,5,1,2,5,9,9,6,5,4,7,4]));

function getSum(array) {
  return array.reduce((totalSum, currentValue) => totalSum + currentValue, 0);
}

function minTotalWaitingTime(patients) {
  // sort the array
  // the first patient wait time is 0
  // second is first
  // third is second + first
  // ...
  let totalWaitingTime = 0;
  patients.sort((a,b) => a - b);
  console.log('sorted', patients);

  for (let i = 0; i < patients.length; i++) {
    totalWaitingTime += getSum(patients.slice(0, i));
  }

  return totalWaitingTime + patients[0];
}

// console.log(minTotalWaitingTime([15, 20, 10]));
// 10 0
// 15 10
// 20 10 + 15
// twt = 25 + 10 + 10 
// console.log(minTotalWaitingTime([10, 10, 25, 30, 20, 15]));
// 10 0
// 10 10
// 15 10 + 10 = 20
// 20 10 + 10 + 15 = 35
// 25 10 + 10 + 15 + 20 = 55
// 30 10 + 10 + 15 + 20 + 25 = 80
// TWT: 210

// 10 10 15 20 25 30
/*
  1st twt = 0; twt = 10;
  2st twt = 10; twt = 25;
  3rd twt = 25;
*/

// get sum until patients[i] 0 - patients[i] and incremement total wait time for that amount

function min2TotalWaitingTime(t, n) {
  let waitingTime = 0;
  let treatedPatients = Array(n).fill(0);
  console.log(treatedPatients);

  for (let i = 1; i < n; i++) {
    let tMin = +Infinity;
    let minIndex = 0;

    for (let j = 1; j < n; j++) {
      if (treatedPatients[j] === 0 && t[j] < tMin) {
        tMin = t[j];
        minIndex = j;
      }
    }

    waitingTime += (n - i) * tMin;
    treatedPatients[minIndex] = 1;
  }

  return waitingTime;
}

// console.log(min2TotalWaitingTime([15 ,20, 10], 3));

function celebrationParty(kidsAges) {
  kidsAges.sort((a, b) => a - b);
  const playingGroups = [];

  for (let i = kidsAges.length - 1; i >= 0; i--) {
    if (kidsAges[i] - kidsAges[0] < 3) {
      const validPlayingGroup = kidsAges.splice(0, i + 1)
      playingGroups.push(validPlayingGroup);
      i = kidsAges.length;
    }
  }

  return playingGroups;
}

const randomKidAges = Array.from({ length: 76000000 }, () => Math.floor(Math.random() * (16 - 1 + 1)) + 1);

function academicCelebrationParty(kidsAges) {
  const segments = [];
  let left = 1;

  while (left <= kidsAges.length) {
    let l = kidsAges[left];
    let r = kidsAges[left] + 2;
    segments.push([l, r]);
    left += 1;
    while (left <= kidsAges.length && kidsAges[left] <= r) {
      left += 1;
    }
  }

  return segments;
}
//!L
//* HIGHLIGHT
//? why is this here
//TODO: implement...
//// const users = props.user.filter... - this is commented out code

// console.log(celebrationParty([2, 3, 8, 12, 14, 6, 5, 4, 2, 1]));
// console.log(celebrationParty([5, 7, 9, 11, 12, 13, 3, 3, 3, 3, 4, 5, 5, 5]));
// console.time('aa');
// console.log(celebrationParty(randomKidAges));
// console.timeEnd('aa');
// console.log(academicCelebrationParty([5, 7, 9, 11, 12, 13, 3, 3, 3, 3, 4, 5, 5, 5]));
// 1, 2, 2, 3, 4, 5, 6, 8, 12, 14

function maxLootValue(weights, prices, knapsackCapacity) {
  const availableItems = [];
  const loot = {
    value: 0,
    weight: 0,
  }

  for (let i = 0; i < weights.length; i++) {
    const pricePerKg = Number((prices[i] / weights[i]).toFixed(2));
    availableItems.push({
      weight: weights[i],
      price: prices[i],
      pricePerKg,
    });
  }

  availableItems.sort((a, b) => b.pricePerKg - a.pricePerKg);
  console.log(availableItems);
  const totalAvailableWeight = availableItems.reduce((totalWeight, item) => totalWeight + item.weight, 0);
  let index = 0;

  while (loot.weight < knapsackCapacity) {
    // if knapsackCapacity > totalAvailableWeight, this condition is needed to prevent infinite loop
    if (index === availableItems.length) break;

    if (loot.weight + availableItems[index].weight <= knapsackCapacity && knapsackCapacity <= totalAvailableWeight) {
      loot.value += availableItems[index].price;
      loot.weight += availableItems[index].weight;
      index++;
    } else {
      const leftoverCapacity = knapsackCapacity - loot.weight;
      if (leftoverCapacity <= availableItems[index].weight) {
        loot.value += availableItems[index].pricePerKg * leftoverCapacity;
        loot.weight += leftoverCapacity;
      } else {
        loot.value += availableItems[index].price;
        loot.weight += availableItems[index].weight;
      }
      index++;
    }
  }

  return loot;
}
// console.time('a')
// console.log(maxLootValue([5, 4, 3], [30, 28, 24], 9));
// console.log(maxLootValue([12, 7, 20], [50, 65, 52], 20));
// console.log(maxLootValue([12, 7, 20, 14, 5, 7, 8, 27, 11, 3, 6, 9], [50, 65, 52, 53, 14, 65, 90, 122, 54, 43, 37, 33], 20));
// console.log(maxLootValue([5, 4, 3], [30, 28, 24], 100));
// console.timeEnd('a')

function getMostValuableItemIndex(weights, values) {
  let maxValuePerWeight = 0;
  let mostValuableItemIndex = 0;

  for (let i = 0; i < weights.length; i++) {
    if (weights[i] > 0) {
      if (values[i] / weights[i] > maxValuePerWeight) {
        maxValuePerWeight = values[i] / weights[i];
        mostValuableItemIndex = i;
      }
    }
  }

  return mostValuableItemIndex;
}

function academicMaxLootValue(weights, values, capacity) {
  const amounts = Array(weights.length).fill(0);
  let totalValue = 0;

  for (let i = 0; i < weights.length; i++) {
    const index = getMostValuableItemIndex(weights, values);
    // this checks if the whole item weight can fit into leftover capacity. If yes, it takes the whole item. If not, it takes the leftover capacity "capacity" and calculates pricePerKg and multiplies with leftover capacity to get correct value
    const a = Math.min(weights[index], capacity);
    totalValue += a * (values[index] / weights[index]);
    weights[index] -= a;
    amounts[index] += a;
    capacity -= a;
  }

  return {
    totalValue,
    amounts
  }
}
// console.time('a');
// console.log(academicMaxLootValue([5, 4, 3], [30, 28, 24], 100));
// console.timeEnd('a');

function activitySelector(activities) {
  const sortedByFinishTime = activities.sort((a,b) => a[1] - b[1]);
  const events = [];
  let time = 0;

  for (let i = 0; i < activities.length; i++) {
    if (activities[i][0] > time) {
      events.push(activities[i]);
      time = activities[i][1];
    }
  }

  return events;
}

const activities = [[0,6], [3,5], [1, 4], [5,7], [3,9], [5,9], [6,10], [8,11], [8,12], [2,14], [12,16]];

console.time("s");
console.log(activitySelector(activities));
console.timeEnd('s');