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
  const pairs = [];

  while (l < r) {
    pairs.push([nums[l], nums[r]]);
    l++;
    r--;
  }

  const pairSums = pairs.map(pair => pair[0] + pair[1]);
  return Math.max(...pairSums);
}

console.log(minimizeMaximumPairSumInArray([3,5,4,2,4,6]));