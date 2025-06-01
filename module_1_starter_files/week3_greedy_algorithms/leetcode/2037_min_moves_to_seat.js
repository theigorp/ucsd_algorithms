/*
  *EASY
  PROBLEM STATEMENT:
  There are n availabe seats and n students standing in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

  You may perform the following move any number of times - Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)

  Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat. Note that there may be multiple seats or students in the same position at the beginning.

  LOGIC:
  As 1 move is +1 or -1 position, total moves can be calculated by subtracting the position of the seat from the position of the student and returning an absolute value of that.
  To ensure that we will make the minimum number of moves, we sort the array in the ascending order and then we're sure that each student is right next to the nearest seat there is.

  OPTIMIZATION:
  We can eliminate the numberOfMoves variable, but I kept it for readability.
*/
function minMovesToSeat(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let minMoves = 0;

  for (let i = 0; i < seats.length; i++) {
    const numberOfMoves = Math.abs(seats[i] - students[i]);
    minMoves += numberOfMoves;
  }

  return minMoves;
}

console.log(minMovesToSeat([4,1,5,9], [1,3,2,6]));
console.log(minMovesToSeat([3,1,5], [2,7,4]));
console.log(minMovesToSeat([2,2,6,6], [1,6,3,2]));
console.log(minMovesToSeat([12,14,19,19,12], [19,2,17,20,7]));