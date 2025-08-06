/*
  *EASY

  LOGIC:
  Sort boxes by the amount of their units as we need to maximize the total number of units. Loop over box types and choose as many boxes as it can fit into truckSize.
  Use boxesToTake = Math.min(box, truckSize) to simplify logic. Increment totalUnits += boxesToTake * units and subtract the box from truckSize. If truckSize is 0, break.

  OPTIMIZATION:
  The runtime is O(nlogn).
*/
function maximumUnitsOnTruck(boxTypes, truckSize) {
  let totalUnits = 0;
  //* O(nlogn)
  boxTypes.sort((a, b) => b[1] - a[1]);

  //* O(n)
  for (const [box, units] of boxTypes) {
    // if truckSize is smaller than the amount of available boxes, take truckSize amount of boxes
    const boxesToTake = Math.min(box, truckSize);
    totalUnits += boxesToTake * units;
    truckSize -= box;
    if (truckSize === 0) break;
  }

  return totalUnits;
}

console.log(
  maximumUnitsOnTruck(
    [
      [1, 3],
      [5, 5],
      [2, 5],
      [4, 2],
      [4, 1],
      [3, 1],
      [2, 2],
      [1, 3],
      [2, 5],
      [3, 2],
    ],
    35
  )
);
