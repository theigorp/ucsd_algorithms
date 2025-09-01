/*
  *MEDIUM

  LOGIC:
  Replacing the first character with "a" always breaks the palindrome. If first character is not "a" then replace the last
  character of the palindrome with "b". Use 2P approach to loop the palindrome. If palindrome[L] is not "a", replace with "a"
  and return immediateliy. After the while loop, if it hasn't returned, replace last char with "b" and return. If palindrome
  length is 1, return empty string.

  OPTIMIZATION:
  The runtime is O(n).
*/
function breakPalindrome(palindrome) {
  if (palindrome.length <= 1) {
    return '';
  }

  let l = 0;
  let r = palindrome.length - 1;
  const letters = palindrome.split('');
  //* O(n)
  while (l < r) {
    if (palindrome[l] !== 'a') {
      letters[l] = 'a';
      return letters.join('');
    } else {
      l++;
      r--;
    }
  }

  letters[letters.length - 1] = 'b';
  return letters.join('');
}