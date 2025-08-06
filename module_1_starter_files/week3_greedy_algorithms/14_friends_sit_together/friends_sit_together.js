function friendsSitTogether(positions) {
  //* O(nlogn)
  positions.sort((a,b) => a - b);

  const medianIndex = Math.floor(positions.length / 2);
  const median = positions.length % 2 === 0 ? positions[medianIndex - 1] : positions[medianIndex];
  //* O(n) for everything below this line
  const realMedianIndex = positions.findIndex((value) => value === median);
  const firstHalf = positions.slice(0, realMedianIndex);
  const secondHalf = positions.slice(realMedianIndex + 1);
  let totalMoves = 0;

  let tempMedian1 = median;
  for (let i = firstHalf.length - 1; i >= 0; i--) {
    const movesMade = tempMedian1 - firstHalf[i] - 1;
    totalMoves += movesMade;
    tempMedian1--;
  }

  let tempMedian2 = median;
  for (let i = 0; i < secondHalf.length; i++) {
    const movesMade = secondHalf[i] - tempMedian2 - 1;
    totalMoves += movesMade;
    tempMedian2++;
  }

  return totalMoves;
}
console.log(friendsSitTogether([1,3,7]));
console.log(friendsSitTogether([1,5,9]));
console.log(friendsSitTogether([1,2,3]));
console.log(friendsSitTogether([1,3,4]));
console.log(friendsSitTogether([2,10,14,17]));
console.log(friendsSitTogether([5,20,23,30,32,35]));