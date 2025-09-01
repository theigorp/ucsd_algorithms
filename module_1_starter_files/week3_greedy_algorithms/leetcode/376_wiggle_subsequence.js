function wiggleSubsequence(nums) {
  if (nums.length === 1) {
    return nums.length;
  }

  let up = 1;
  let down = 1;

  for (let i = 1; i < nums.length; i++) {
    console.log('nums[i]', nums[i])
    console.log('nums[i-1]', nums[i - 1])
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
      console.log('up after', up)
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1;
      console.log('down after', down);
    }
  }

  return Math.max(up, down);
};

// console.log(wiggleSubsequence([1,2,3,4,5,6,7,8,9]));
// console.log(wiggleSubsequence([0,0,0]));
// console.log(wiggleSubsequence([1, 7, 4, 9, 2, 5]));
// console.log(wiggleSubsequence([1, 4, 7, 2, 5]));
console.log(wiggleSubsequence([1, 7, 4, 5, 5]));
// console.log(wiggleSubsequence([1,17,5,10,13,15,10,5,16,8]));