function cookingADinner(timeToCook, freshness) {
  //* O(n)
  const dishes = timeToCook.map((time, i) => ({
    time,
    fresh: freshness[i]
  }));
  //* O(nlogn)
  dishes.sort((a,b) => a.time - b.time);
  const freshRanges = [];
  let elapsedTime = 0;
  //* O(n)
  for (const dish of dishes) {
    elapsedTime += dish.time;
    const freshTimeStart = elapsedTime;
    const freshTimeEnd = elapsedTime + dish.fresh;

    freshRanges.push([freshTimeStart, freshTimeEnd]);
  }

  return freshRanges[0][1] >= freshRanges[freshRanges.length - 1][0];
}

// console.log(canAllDishesBeFresh([3,2,1], [5,4,3])); // F
// console.log(canAllDishesBeFresh([2,3,1], [5,7,4])); // F
// console.log(canAllDishesBeFresh([2,3,1], [6,7,5])); // T
// console.log(canAllDishesBeFresh([2,1], [3,4])) // T
// console.log(canAllDishesBeFresh([2,3,1], [10,3,5])) // T