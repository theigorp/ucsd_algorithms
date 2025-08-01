/*
  LOGIC:
    Everytime a bulb's state is off (0) we should flip the switch (increment press count), change the array from that index (values that
    were 0 are now 1, and vice versa) and increment i.
  
  OPTIMIZATIONS:
    Runtime is O(n * m) or O(n^2) worst case. Perhaps this could be solved without having to update the whole array in each while iteration.
*/
function bulbSwitching(states) {
  let minSwitchPresses = 0;
  let i = 0;
  //* O(n)
  while (!states.every(bulb => bulb === 1)) {
    if (i === states.length) break;

    if (states[i] === 0) {
      minSwitchPresses++;
      //* O(m)
      for (let j = i; j < states.length; j++) {
        states[j] = states[j] === 0 ? 1 : 0;
      }
    }

    i++;
  }

  return minSwitchPresses;
}

function minSwitchPresses(bulbs) {
  let flips = 0;
  //* O(n)
  for (let i = 0; i < bulbs.length; i++) {
    // if flips is even that means the array is unchanged (original). If it's odd, it means the array should be mirrored (0 is 1 and vice versa)
    const current = flips % 2 === 0 ? bulbs[i] : 1 - bulbs[i];
    if (current === 0) {
      // everytime we land on 0 we should increment
      flips++;
    }
  }

  return flips;
}

// console.log(minSwitchPresses([1,0,0,1,1])) // 2
// console.log(bulbSwitching([0,0,0,0])) // 1
// console.log(bulbSwitching([1,1,1])) // 0
// console.log(bulbSwitching([0,1,0,1,0,1])); // 6
// console.log(bulbSwitching([0,1,0,1])); // 4
// console.log(bulbSwitching([0,1,0,1,0,0,1,0,0,0,0,1])); // 8