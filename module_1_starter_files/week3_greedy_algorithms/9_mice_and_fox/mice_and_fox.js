/*
  LOGIC:
    To minimize the time taken for mice to hide in a hole, mice must hide in the nearest possible hole to that individual mice.
    If a mice has holes that's 1min away and 2min away, but he knows there's a mice behind him, he'll choose the whole that's
    2min away so the other mice can hide in the hole that's the closest to him. Considering that, then this problem is just about
    finding the difference between the first mouse and the first available hole. We'll sort both arrays in an ascending order because
    of the rule above (so that first mice and go in hole closest to him). After that, we just need to find the difference between
    the first mice and the first hole and return the Math.max of all differences.
  
  OPTIMIZATIONS:
   Runtime is O(nlogn), no optimizations that I can think of.
*/
function miceAndFox(mices, holes) {
  //* O(nlogn)
  mices.sort((a,b) => a - b);
  holes.sort((a,b) => a - b);

  const differences = [];
  //* O(n)
  for (let i = 0; i < mices.length; i++) {
    const difference = Math.abs(mices[i] - holes[i]);
    differences.push(difference);
  }
  //* O(n)
  return Math.max(...differences);
}

// console.log(miceAndFox([4, -4, 2], [4, 0, 5])); // 4min
// console.log(miceAndFox([0, 2, 9], [4, 5, 7])); // 4
// console.log(miceAndFox([1, 4, 9], [10, 2, 3])); // 1
// console.log(miceAndFox([0, 100], [50, 60])); // 50
// console.log(miceAndFox([10, 20, 30], [30, 20, 10])); // 0
// console.log(miceAndFox([-5, 0, 5], [-10, 10, 0])); // 5
// console.log(miceAndFox([-10, -79, -79, 67, 93, -85, -28, -94], [-2, 9, 69, 25, -31, 23, 50, 78])); // 102