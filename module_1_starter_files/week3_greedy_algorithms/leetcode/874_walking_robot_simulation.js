/*
  *MEDIUM

  LOGIC:
  Use a hash map to store obstacles to prevent O(n) lookups. Store obstacles as combined strings ('2,4'). For directions, use the clockwise trick (01 (N), 10 (E), 0-1 (S), -10 (W)).
  Loop over commands and update direction variable (initially set to 0) by incrementing (use modulo to prevent overflow). When command is a positive integer, loop over the command (
  just increment from 0 to command value). Calculate the new X and Y for each step using directions. If obstacleSet contains those coordinates - break. Else, set x and y to new values
  and calculate new maxDistance

  OPTIMIZATION:
  Runtime is O(n + m), that's the best I can think of.
*/
function walkingRobotSimulation(commands, obstacles) {
  let x = 0;
  let y = 0;
  const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // N, E, S, W
  let direction = 0; // first index of DIRECTIONS
  let maximumDistance = 0;
  const obstacleSet = new Set();
  //* O(n)
  for (const obstacle of obstacles) {
    obstacleSet.add(obstacle.toString());
  }
  //* O(n + m) but m will never be > 9
  for (const command of commands) {
    if (command === -2) {
      direction = (direction + 3) % DIRECTIONS.length;
    } else if (command === -1) {
      direction = (direction + 1) % DIRECTIONS.length;
    } else {
      //* O(m) - m is command which is never > 9
      for (let i = 0; i < command; i++) {
        const newX = x + DIRECTIONS[direction][0];
        const newY = y + DIRECTIONS[direction][1];

        if (obstacleSet.has([newX, newY].toString())) {
          break;
        }

        x = newX;
        y = newY;
        maximumDistance = Math.max(maximumDistance, x * x + y * y);
      }
    }
  }

  return maximumDistance;
}

// console.log(walkingRobotSimulation([6, -1, -1, 6], [[0, 0]])); // 36
// console.log(walkingRobotSimulation([6, -1, -1, 6], [])); // 36
// console.log(walkingRobotSimulation([4,-1,3], [])) // 25
// console.log(walkingRobotSimulation([4,-2, 4], [])) // 25
// console.log(walkingRobotSimulation([4, -1, 4, -2, 4], [[2, 4]])); // 65
