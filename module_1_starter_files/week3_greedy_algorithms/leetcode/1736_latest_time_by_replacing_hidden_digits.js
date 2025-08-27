/*
  *EASY

  LOGIC:
  Loop over times and hardcode the rules using if's. Watch out for cases when index 0 is ? and index 1 is ? or when
  index 0 is ? but index 1 is > 3.

  OPTIMIZATION:
  The runtime is O(n).
*/
function maximumTime(time) {
    const timeArray = time.split('');

    for (let i = 0; i < timeArray.length; i++) {
        if (timeArray[0] === '?' && (timeArray[1] <= 3 || timeArray[1] === '?')) {
            timeArray[0] = '2';
        } else if (timeArray[0] === '?' && timeArray[1] > 3) {
            timeArray[0] = '1';
        } else if (timeArray[1] === '?' && timeArray[0] === '2') {
            timeArray[1] = '3';
        } else if (timeArray[1] === '?' && (timeArray[0] === '1' || timeArray[0] === '0')) {
            timeArray[1] = '9';
        } else if (timeArray[3] === '?') {
            timeArray[3] = '5';
        } else if (timeArray[4] === '?') {
            timeArray[4] = '9';
        }
    }

    return timeArray.join('');
};