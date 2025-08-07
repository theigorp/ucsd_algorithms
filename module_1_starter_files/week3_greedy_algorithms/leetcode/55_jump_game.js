/*
  *MEDIUM

  LOGIC:
  To be updated.

  OPTIMIZATION:
  The runtime is O(n).
*/
function jumpGame(nums) {
  let lastGoodIndexPosition = nums[nums.length - 1];
  
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastGoodIndexPosition) {
      lastGoodIndexPosition = i;
    }
  }

  return lastGoodIndexPosition === 0;
}

console.log(jumpGame([3, 2, 1, 0, 4])); // false
console.log(jumpGame([2, 3, 1, 1, 4])); // true
console.log(jumpGame([2, 0])); // true
console.log(jumpGame([2, 0, 0])); // true
console.log(jumpGame([0])); // true
console.log(jumpGame([0, 1])); // false
console.log(jumpGame([3, 0, 8, 2, 0, 0, 1])); // true
