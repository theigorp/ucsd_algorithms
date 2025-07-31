function cookingADinner(timeToCook, freshness) {
  //* O(n)
  const dishes = timeToCook.map((time, i) => ({
    time,
    fresh: freshness[i],
    deadline: time + freshness[i]
  }));
  //* O(nlogn)
  dishes.sort((a,b) => a.deadline - b.deadline);

  let elapsedTime = 0;
  //* O(n)
  for (const dish of dishes) {
    elapsedTime += dish.time;
    
    if (elapsedTime > dish.deadline) {
      return false;
    }
  }

  return true;
}

// console.log(cookingADinner([3,2,1], [5,4,3])); // F
// console.log(cookingADinner([2,3,1], [5,7,4])); // F
// console.log(cookingADinner([2,3,1], [6,7,5])); // T
// console.log(cookingADinner([2,1], [3,4])) // T
// console.log(cookingADinner([2,3,1], [10,3,5])) // T
// console.log(cookingADinner([3,1], [1,100])) // T
// console.log(cookingADinner([3,4], [2,1])) // F