/*
  *EASY

  LOGIC:
  Create a hashmap of number of letter occurences. Loop over and if count is even, use the max count. If count is >= 3, make an even
  part by subtracting 1, and increment maxLength by the even part. Then loop over once more and if any value in map is 1, increment
  maxLength by 1 and break.


  OPTIMIZATION:
  The runtime is O(n). No optimization can be made.
*/
function longestPalindrome(s) {
  let maxLength;
  const letters = {};

  for (const letter of s) {
    if (Object.hasOwn(letters, letter)) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }

  for (const [letter, value] of Object.entries(letters)) {
    if (value % 2 === 0) {
      maxLength += value;
      letters[letter] -= value;
    } else if (value >= 3) {
      // make the number even
      const evenPart = value - 1;
      maxLength += evenPart;
      letters[letter] -= evenPart; // or just set it to 1
    }
  }

  for (const [letter, value] of Object.entries(letters)) {
    if (value === 1) {
      maxLength += value;
      letter[letter] -= value;
      break;
    }
  }

  return maxLength;
}

function optimizedLongestPalindrome(s) {
  const set = new Set();
  let maxLength = 0;

  for (const letter of s) {
    if (set.has(letter)) {
      set.delete(letter);
      // we add 2 because we know that this is the second time we're seeing this letter hence we know it's count is even and we can add it to maxLength
      // even if a count of a letter is 50, we will still correctly count it and increment maxLength by 50.
      // this also covers scenarios where count is 49 => it will use 48 letters as they're even and the else branch will add the 1 letter that's left remaining
      maxLength += 2;
    } else {
      // this covers cases when count of a letter is 1 or when we have leftover letters from odd numbers like 49
      set.add(letter);
    }
  }

  return set.size >= 1 ? maxLength + 1 : maxLength;
}

console.log(optimizedLongestPalindrome('abccccdd')); // 7 
console.log(optimizedLongestPalindrome('aaabccccdd')); // 9
console.log(optimizedLongestPalindrome('ABccbDdA')); // 5