/*
  LOGIC:
    To get the minimum cost we need to sort the array in an ascending order. The greedy approach is to sum the first 2 elements as they
    are smallest, remove them from the array and add the newly formed rope to the existing array. We should then sort the array again so
    that the newly formed rope falls in correct place. Then, repeat the same again.
  
  OPTIMIZATIONS:
   Runtime is O(n^2logn) which is not optimal. In order to get O(nlogn) we should implement a MinHeap/PriorityQueue
*/
function connectingRopes(ropes) {
  let minCost = 0;
  //* O(n)
  while(ropes.length > 1) {
    //* O(nlogn)
    ropes.sort((a,b) => a - b);
    const cost = ropes[0] + ropes[1];
    minCost += cost;
    //* O(n)
    ropes.splice(0,2);
    ropes.push(cost);
  }

  return minCost;
}

console.log(connectingRopes([2,5,4,8])) // 36
console.log(connectingRopes([4,3,2,6])) // 29
console.log(connectingRopes([4,1, 2])) // 10
console.log(connectingRopes([4])) // 0
console.log(connectingRopes([4, 1])) // 5
console.log(connectingRopes([7,2,1,4,8])) //46
console.log(connectingRopes([56927, 40707, 68170, 54560])) // 440728