/*
  *EASY

  LOGIC:
  Update L and R pointers until you find L and R where their values are not the same. In that case, create variants where you 
  remove the left value and where you remove the right value. If their reverses are the same, return true.

  OPTIMIZATION:
  The runtime is O(n^2).
*/
function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      //* O(1) in V8 engine for String types, but O(n) for Array types
      const withoutLeft = s.slice(0, left).concat(s.slice(left + 1));
      const withoutRight = s.slice(0, right).concat(s.slice(right + 1));
      const reversedWithoutLeft = withoutLeft.split('').reverse().join('');
      const reversedWithoutRight = withoutRight.split('').reverse().join('');

      return withoutLeft === reversedWithoutLeft || withoutRight === reversedWithoutRight;
    }
    left++;
    right--;
  }

  return true;
}
//* O(n)
function optimizedValidPalindrome(s) {
  function isPalindrome(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    }
    left++;
    right--;
  }

  return true;
}

console.log(optimizedValidPalindrome('abbca'));
console.log(optimizedValidPalindrome('nevena'));
console.log(optimizedValidPalindrome('aracecar'));
