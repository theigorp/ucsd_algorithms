/*
  *MEDIUM

  LOGIC:
  Use a custom comparator function. Convert nums to strings and check if the combination of a.concat(b) < b.concat(a).
  Return -1 if true, else 1. Edge case is when answer starts with 0, so if it starts with 0, return '0', else return nums.join('')


  OPTIMIZATION:
  The runtime is O(nlogn). No optimization can be made.
*/
function largestNumber(nums) {
  nums.sort((a,b) => {
    if (String(a).concat(String(b)) > String(b).concat(String(a))) {
      return -1;
    } else {
      return 1;
    }
  });

  return nums[0] === '0' ? '0' : nums.join('');
}

console.log(largestNumber([3,30,34,5,9]))