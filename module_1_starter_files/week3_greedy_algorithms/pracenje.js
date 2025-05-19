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
console.log(academicCelebrationParty([5, 7, 9, 11, 12, 13, 3, 3, 3, 3, 4, 5, 5, 5]));
// 1, 2, 2, 3, 4, 5, 6, 8, 12, 14

function maxLootValue(weights, values, capacity) {

}