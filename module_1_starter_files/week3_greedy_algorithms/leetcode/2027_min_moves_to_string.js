/*
  *EASY
  PROBLEM STATEMENT:
  You are given a string s consisting of n characters which are either 'X' or 'O'.

  A move is defined as selecting three consecutive characters of s and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same.

  Return the minimum number of moves required so that all the characters of s are converted to 'O'.

  LOGIC:
  We will select the first three characters and check if they contain X. If yes, that means we need to convert them, therefore minMoves is icnremented. Since we "converted" those 3 characters
  we increase counter (i) by 3 to skip visiting the indexes we already covered. In case the first three characters don't contain X, we will also increment i by 3 because we covered that
  segment of the string. An edge case is when string begins with O. In that case, we can omit the O and select the first three characters from the first occurence of X (because if we don't do that, we will make unnecessary additional moves). Therefore, in the case when string starts with O, we increment the counter (i) until we reach the first X.

  OPTIMIZATION:
  The runtime is O(n).
*/
function minMovesToString(string) {
  let minMoves = 0;
  let i = 0;

  while (i < string.length) {
    if (string[i] === 'O') {
      i++;
    } else {
      const move = string.substring(i, i + 3);
      if (move.includes('X')) {
        minMoves++;
      }
      i += 3;
    }
  }

  return minMoves;
}

// console.log(minMovesToString('XXX'));
// console.log(minMovesToString('XXOX'));
// console.log(minMovesToString('OOOO'));
console.log(minMovesToString('OXOX'));
// console.log(minMovesToString('XX0000XXX'));