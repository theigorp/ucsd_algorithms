/*
  *EASY

  LOGIC:
  Find the first occurence of digit 6 and replace it with digit 9. A shorter approach is to convert nums to a string and run .replace('6', '9').

  OPTIMIZATION:
  The runtime is O(nlogn + mlogm).
*/
function maximum69Number(num) {
    const digits = String(num).split('')

    const firstOccurenceOfSix = digits.findIndex(digit => digit === '6');
    if (firstOccurenceOfSix !== -1) {
        digits[firstOccurenceOfSix] = '9';
    }

    return Number(digits.join(''));
}
