/*
  *MEDIUM

  LOGIC:
  Update when you repeat the problem.

  OPTIMIZATION:
  The runtime is O(n).
*/
function gasStation(gas, cost) {
  //* O(n)
  const gasSum = gas.reduce((sum, g) => sum + g);
  const costSum = cost.reduce((sum, c) => sum + c);

  if (gasSum < costSum) {
    return -1;
  }

  let startIndex = 0;
  let gasAmount = 0;
  //* O(n)
  for (let i = 0; i < gas.length; i++) {
    gasAmount += gas[i] - cost[i];

    if (gasAmount < 0) {
      gasAmount = 0;
      startIndex = i + 1;
    }
  }

  return startIndex;
}

// console.log(gasStation([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// console.log(gasStation([1,2,3,4,5], [3,4,5,6,7]))
// console.log(gasStation([2,3,4], [3,4,3]))
// console.log(gasStation([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
// console.log(gasStation([5, 8, 2, 8], [6, 5, 6, 6]));
console.log(gasStation([3, 1, 1], [1, 2, 2]));
// console.log(
//   gasStation(
//     [
//       67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
//       90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
//       15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
//       38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//       61, 62, 63, 64, 65, 66,
//     ],
//     [
//       27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
//       50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
//       73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
//       96, 97, 98, 99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//       21, 22, 23, 24, 25, 26,
//     ]
//   )
// );
