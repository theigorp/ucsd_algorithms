/*
  *MEDIUM

  LOGIC:
  Sort bags in asc. order by the amount of rocks it takes to fill their capacity. Loop over the array with a for or while loop
  (condition should be that additionalRocks > 0) and i < length. If the current element is 0, increment bagsWithFullCapacity. If
  there are more additionalRocks than it's required to fill the current element capacity, decrement additionalRocks by that amount
  and increment bagsWithFullCapacity.

  OPTIMIZATION:
  The runtime is O(nlogn.
*/
function maximumBagsWithFullCapacityOfRocks(capacity, rocks, additionalRocks) {
  let bagsWithFullCapacity = 0;
  let i = 0;
  //* O(n)
  const rocksToFullCapacity = capacity.map((c, i) => c - rocks[i]);
  //* O(nlogn)
  rocksToFullCapacity.sort((a, b) => a - b);
  //* O(n)
  while (additionalRocks > 0 && i < rocksToFullCapacity.length) {
    if (rocksToFullCapacity[i] === 0) {
      bagsWithFullCapacity++;
    } else if (additionalRocks >= rocksToFullCapacity[i]) {
      additionalRocks -= rocksToFullCapacity[i];
      bagsWithFullCapacity++;
    }
    i++;
  }

  return bagsWithFullCapacity;
}
