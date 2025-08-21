/*
  *HARD

  LOGIC:
  Initialize candies array and fill it with 1's for each kid. First loop through ratings from left to right checking only if current rating[i] is greater
  than the left neighbor. If yes, candies[i] should have 1 more candy than the left neighbor. Next, loop through ratings from right to left and check if
  current rating[i] is greater than the right neighbor. If yes and if right neighbor has the same amount (or greater) of candy as candies[i], then
  candies[i] should have 1 more candy than the right neighbor.

  OPTIMIZATION:
  The runtime is O(n).
*/
function candy(ratings) {
    const candies = [];

    for (let i = 0; i < ratings.length; i++) {
        candies.push(1);
    }

    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] > ratings[i + 1] && candies[i + 1] >= candies[i]) {
            candies[i] = candies[i + 1] + 1;
        } else if (ratings[i] < ratings[i + 1]) {
            candies[i + 1] = candies[i] + 1;
        }
    }

    for (let i = ratings.length - 1; i >= 0; i--) {
        if (ratings[i] < ratings[i - 1] && candies[i] >= candies[i - 1]) {
            candies[i - 1] = candies[i] + 1;
        }
    }

    return candies.reduce((sum, candy) => sum + candy);
};

function optimizedCandy(ratings) {
  //* O(n)
  const candies = new Array(ratings.length).fill(1); // assign one candy to each child
  //* O(n) for both loops
  // we loop ratings looking only on the left neighbor
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i - 1] < ratings[i]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  // we start from r.length - 2 because we know the last element doesn't have a right neighbor and we'll only look at right neighbors
  for (let i = ratings.length - 2; i >=0; i--) {
    // if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
    //   candies[i] = candies[i + 1] + 1;
    // } - either Math.max or this condition
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i + 1] + 1, candies[i]);
    }
  }

  return candies.reduce((sum, c) => sum + c);
}

console.log(optimizedCandy([4, 5, 8, 11, 0, 0, 0, 12, 2, 5, 1, 2])); //21
console.log(optimizedCandy([1, 2, 87, 87, 87, 2, 1])); // 13
console.log(
  optimizedCandy([
    20000, 20000, 16001, 16001, 16002, 16002, 16003, 16003, 16004, 16004, 16005, 16005, 16006,
    16006, 16007, 16007, 16008, 16008, 16009, 16009, 16010, 16010, 16011, 16011, 16012, 16012,
    16013, 16013, 16014, 16014, 16015, 16015, 16016, 16016, 16017, 16017, 16018, 16018, 16019,
    16019, 16020, 16020, 16021, 16021, 16022, 16022, 16023, 16023, 16024, 16024,
  ])
); // 74
