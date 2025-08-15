function eraseOverlapIntervals(intervals) {
  //* O(nlogn)
  intervals.sort((a, b) => a[1] - b[1]);
  let nonOverlappingIntervals = [intervals[0]];
  //* O(n) - we set i to 1 because we already pushed intervals[0] to nonOverlappingIntervals
  for (let i = 1; i < intervals.length; i++) {
    if (nonOverlappingIntervals[nonOverlappingIntervals.length - 1][1] <= intervals[i][0]) {
      nonOverlappingIntervals.push(intervals[i]);
    }
  }

  const numberOfIntervalsToRemove = intervals.length - nonOverlappingIntervals.length;
  return numberOfIntervalsToRemove;
}

function optimizedEraseOverlapIntervals(intervals) {
  //* O(nlogn)
  intervals.sort((a,b) => a[1] - b[1]);
  // greedy choice is to choose the interval with the fastest finish time to free up time for other intervals
  let previousInterval = intervals[0];
  let intervalsToRemove = 0;
  //* O(n) - we set i to 1 because we choose the first interval as our greedy choice
  for (let i = 1; i < intervals.length; i++) {
    if (previousInterval[1] > intervals[i][0]) {
      intervalsToRemove++;
    } else {
      previousInterval = intervals[i];
    }
  }

  return intervalsToRemove;
}

console.log(optimizedEraseOverlapIntervals([[1,100], [11,22], [1,11], [2,12]]));
// console.log(eraseOverlapIntervals());
// console.log(eraseOverlapIntervals());
