function maximumUnitsOnTruck(boxTypes, truckSize) {
  let totalUnits = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  let i = 0;
  while (truckSize > 0) {
    if (i === boxTypes.length) break;
    if (boxTypes[i][0] <= truckSize) {
      totalUnits += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
      i++;
    } else {
      totalUnits += truckSize * boxTypes[i][1];
      truckSize = 0;
    }
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
