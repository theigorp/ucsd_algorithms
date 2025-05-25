function minRefills(dist, tank, sCount, stops) {
  if (tank < stops[0]) return -1;
  if (tank > dist) return 0;

  const numOfRefill = stops.slice();
  numOfRefill.push(dist);
  numOfRefill.unshift(0)

  let count = 0;
  let current = 0;
  const length = numOfRefill.length;

  while (current < length - 1) {
    let last_current = current;
    while (numOfRefill[current + 1] - numOfRefill[last_current] <= tank) {
      current += 1;
    }

    if (current === last_current) return -1;
    if (current < length - 1) count += 1;
  }

  return count;
}

console.log(minRefills(950, 400, 4, [200, 375, 550, 750]));
console.log(minRefills(950, 400, 4, [200, 200, 200, 200]));
console.log(minRefills(950, 400, 4, [200, 200, undefined, 200]));
console.log(minRefills(950, 400, 4, [0, 0, 0, 0]));
console.log(minRefills(1200, 400, 5, [200, 375, 550, 750, 1100]));
console.log(minRefills(10, 3, 4, [1, 2, 5, 9]));
console.log(minRefills(200, 250, 2, [100, 150]));
console.log(minRefills(650, 350, 3, [300, 450, 500]));
console.log(minRefills(20, 4, 4, [4, 8, 12, 16]));
console.log(minRefills(3, 1, 1, [2]));
console.log(minRefills(10, 5, 2, [3, 7]));
