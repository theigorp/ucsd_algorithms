/*
  *MEDIUM

  LOGIC:
  Init end to last element index and loop over nums until end isn't 0. In each iteration,
  slice a portion of nums from 0 to end + 1 and find the first index from which end is reachable.
  Update end with that index, increment minJumps and continue.

  OPTIMIZATION:
  The runtime is O(n^2). This can be done in O(n).
*/
function jumpGameII(nums) {
  let end = nums.length - 1;
  let minJumps = 0;
  //* O(n^2) worst case but sometimes it's O(n*m)
  while (end !== 0) {
    //* O(n)
    const segment = nums.slice(0, end + 1);
    //* O(n)
    const firstIndexToReachEnd = segment.findIndex((num, i) => num + i >= end);
    end = firstIndexToReachEnd;
    minJumps++;
  }

  return minJumps;
}

console.log(jumpGameII([4,1,1,3,1,1,1]));
console.log(jumpGameII([4,1,1,1,3,1,1,2,1,1]));
console.log(jumpGameII([2,3,1,1,4]));
console.log(jumpGameII([2,3,0,1,4]));
console.log(jumpGameII([0]));
console.log(jumpGameII([1,1,1,1]));
console.log(jumpGameII([2,0,2,5,125,2,1]));
