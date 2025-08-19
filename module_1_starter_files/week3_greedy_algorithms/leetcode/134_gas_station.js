function gasStation(gas, cost) {
  const startIndices = [];
  //* O(n)
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] >= cost[i]) {
      startIndices.push(i);
    }
  }
  //* O(n^2) worst case or O(n*m) m - is the length of startIndices. Time limit is exceeded with this approach.
  for (const index of startIndices) {
    let currentIndex = index;
    let gasAmount = gas[currentIndex];
    //* O(n)
    while (gasAmount >= cost[currentIndex]) {
      const nextIndex = (currentIndex + 1) % gas.length;
      if (nextIndex === index) {
        return index;
      }
      gasAmount = gasAmount - cost[currentIndex] + gas[nextIndex];
      currentIndex = nextIndex;
    }
  }

  return -1;
};

console.log(gasStation([1,2,3,4,5], [3,4,5,1,2]))
// console.log(gasStation([1,2,3,4,5], [3,4,5,6,7]))
// console.log(gasStation([2,3,4], [3,4,3]))
// console.log(gasStation([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
