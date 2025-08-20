/*
  *MEDIUM

  LOGIC:
  Sort nums in asc. order, using the two pointer approach pair first el. with the last el. Calculate the sum of pairs and return Math.max()


  OPTIMIZATION:
  The runtime is O(n). No optimization can be made.
*/
function minimizeMaximumPairSumInArray(nums) {
  nums.sort((a,b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  const pairSums = [];

  while (l < r) {
    pairSums.push(nums[l] + nums[r]);
    l++;
    r--;
  }

  return Math.max(...pairSums);
}

console.log(minimizeMaximumPairSumInArray([3,5,4,2,4,6]));