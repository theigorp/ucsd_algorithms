/*
  *MEDIUM

  LOGIC:
  We just need to track how many times the direction changed up/down (count peaks and valleys). Track the previous difference between 2 elements
  to count how many times direction changed. Initialize prevDiff to 0, loop over nums and if currentDiff > 0 and prevDiff < 0 or vice versa that
  means that direction is changing and we should increment maxLength and set prevDiff to currDiff.


  OPTIMIZATION:
  The runtime is O(n). No optimization can be made.
*/
function wiggleSubsequence(nums) {
  if (nums.length === 1) {
    return nums.length;
  }

  let previousDifference = 0;
  let maxLength = 1; // it will be at least 1

  //* O(n) - we initialize i to 1 for easier bound handling
  for (let i = 1; i < nums.length; i++) {
    const difference = nums[i] - nums[i - 1];
    
    if (nums[i] > 0 && previousDifference <= 0 || nums[i] < 0 && previousDifference >= 0) {
      maxLength++;
      previousDifference = difference;
    }
  }

  return maxLength;
};

// console.log(wiggleSubsequence([1,2,3,4,5,6,7,8,9]));
// console.log(wiggleSubsequence([0,0,0]));
// console.log(wiggleSubsequence([1, 7, 4, 9, 2, 5]));
// console.log(wiggleSubsequence([1, 4, 7, 2, 5]));
console.log(wiggleSubsequence([1, 7, 4, 5, 5]));
// console.log(wiggleSubsequence([1,17,5,10,13,15,10,5,16,8]));