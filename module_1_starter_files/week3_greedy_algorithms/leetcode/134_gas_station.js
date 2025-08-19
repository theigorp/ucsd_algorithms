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

// console.log(gasStation([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// console.log(gasStation([1,2,3,4,5], [3,4,5,6,7]))
// console.log(gasStation([2,3,4], [3,4,3]))
// console.log(gasStation([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
console.log(gasStation([5,8,2,8], [6,5,6,6]));
