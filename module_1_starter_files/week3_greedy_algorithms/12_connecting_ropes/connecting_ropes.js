/*
  LOGIC:
    To get the minimum cost we need to sort the array in an ascending order. The way we calculate cost is by summing every rope
    with the sum of the previous 2 ropes -> connectingRopes([1,2,4]) = (1+2) + (1+2+4) = 10.
  
  OPTIMIZATIONS:
   Runtime is O(nlogn) in the worst case or O(1) in the best case.
*/
function connectingRopes(ropes) {
  //* O(1)
  if (ropes.length === 1) {
    return 0;
  } else if (ropes.length === 2) {
    return ropes[0] + ropes[1];
  }
  //* O(nlogn)
  ropes.sort((a,b) => a - b);
  let cost = 0;
  const pairs = [];
  //* O(n)
  for (let i = 0; i < ropes.length; i++) {
    if (i === 0) {
      cost += ropes[i] + ropes[i + 1];
      pairs.push(cost);
    } else if (i !== 1) {
      cost += ropes[i];
      pairs.push(cost);
    }
  }
  //* O(n)
  return pairs.reduce((minCost, current) => minCost + current);
}

console.log(connectingRopes([2,5,4,8])) // 36
console.log(connectingRopes([4,3,2,6])) // 29
console.log(connectingRopes([4,1, 2])) // 10
console.log(connectingRopes([4])) // 0
console.log(connectingRopes([4, 1])) // 5
console.log(connectingRopes([7,2,1,4,8])) //46