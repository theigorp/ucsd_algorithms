function gasStation(gas, cost) {
  const gasAmountAfterCost = [];
  for (let i = 0; i < gas.length; i++) {
    gasAmountAfterCost.push(gas[i] - cost[i]);
  }
  const maxGasAmount = Math.max(...gasAmountAfterCost);
  const startIndex = gasAmountAfterCost.findIndex(gasAmount => gasAmount === maxGasAmount);

  let currentIndex = 3;
  let gasAmount = gas[currentIndex];
  //* O(n)
  while (gasAmount >= cost[currentIndex]) {
    const nextIndex = (currentIndex + 1) % gas.length;
    if (nextIndex === startIndex) {
      return startIndex;
    }
    gasAmount = gasAmount - cost[currentIndex] + gas[nextIndex];
    currentIndex = nextIndex;
  }

  return -1;
}

function canCompleteCircuit(gas, cost) {
  let startIndex = -1;

  for(let i = 0; i < gas.length; i++) {
    const nextIndex = (i + 1) % gas.length;
    if (gas[i] >= cost[i] && (gas[i] - cost[i] + gas[nextIndex] >= cost[nextIndex])) {
      startIndex = i;
      break;
    }
  }
  return startIndex
  let currentIndex = startIndex;
  let gasAmount = gas[currentIndex];

  while (gasAmount >= cost[currentIndex]) {
    const nextIndex = (currentIndex + 1) % gas.length;
    if (nextIndex === startIndex) {
      return startIndex;
    }
    gasAmount = gasAmount - cost[currentIndex] + gas[nextIndex];
    currentIndex = nextIndex;
  }

  return -1;
}

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,6,7]))
// console.log(canCompleteCircuit([2,3,4], [3,4,3]))
// console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
// console.log(canCompleteCircuit([5,8,2,8], [6,5,6,6]));
console.log(canCompleteCircuit([67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66], [27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]));