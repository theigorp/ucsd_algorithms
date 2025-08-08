/*
  *MEDIUM

  LOGIC:
  For an index position to reach the end, the sum of it's index and value must exceed or be equal to the last index. Easiest way to check this
  is to set lastIndexToReachEnd to the last index of an array and then loop the array in reverse. if (i + nums[i] >= lastIndexToReachEnd) then
  set lastIndexToReachEnd to current index.

  OPTIMIZATION:
  The runtime is O(n).
*/
function jumpGame(nums) {
  let lastIndexToReachEnd = nums[nums.length - 1];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastIndexToReachEnd) {
      lastIndexToReachEnd = i;
    }
  }

  return lastIndexToReachEnd === 0;
}

// console.log(jumpGame([3, 2, 1, 0, 4])); // false
// console.log(jumpGame([2, 3, 1, 1, 4])); // true
// console.log(jumpGame([2, 0])); // true
// console.log(jumpGame([2, 0, 0])); // true
// console.log(jumpGame([0])); // true
// console.log(jumpGame([0, 0, 0])); // false
// console.log(jumpGame([0, 1])); // false
// console.log(jumpGame([3, 0, 8, 2, 0, 0, 1])); // true
