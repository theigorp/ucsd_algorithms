/*
  LOGIC:
    Greedy choice is to first select the jobs with the highest profit and place them at the last position
    where they can still be executed before the deadline (job.deadline - TIME_TO_PERFORM_JOB). A hacky
    approach is to find maxDeadline and use that to fill the result array with that many null values.
  
  OPTIMIZATIONS:
   The algorithm is too complex to understand and the runtime is bad - O(n^2logn).
*/
function jobScheduling(profits, deadlines) {
  const jobs = profits.map((profit, i) => ({
    profit,
    deadline: deadlines[i]
  }));

  jobs.sort((a,b) => b.profit - a.profit); // 0(nlogn)
  
  const TIME_TO_PERFORM_JOB = 1;
  // we need the max deadline so we can know what's the max length of the jobs that can be performed
  const MAX_DEADLINE = Math.max(...jobs.map(job => job.deadline));
  // we fill the array with nulls to mark all places as available
  const optimalOrderingOfJobs = new Array(MAX_DEADLINE).fill(null);

  // O(n^2)
  for (const job of jobs) {
    // the position is set to the last possible time a job can be executed so we can allocate sooner positions to other jobs
    const jobPosition = job.deadline - TIME_TO_PERFORM_JOB;

    const isPositionAvailable = optimalOrderingOfJobs[jobPosition] === null;
    // if any of values in array are null, it means we can place a job in that position
    const firstAvailablePosition = optimalOrderingOfJobs.findIndex(job => job === null); // O(n)
 
    if (isPositionAvailable) {
      optimalOrderingOfJobs[jobPosition] = job;
    } else if (firstAvailablePosition !== -1 && firstAvailablePosition + TIME_TO_PERFORM_JOB <= job.deadline) {
      optimalOrderingOfJobs[firstAvailablePosition] = job;
    }
  }

  return optimalOrderingOfJobs.filter(job => job !== null);
}

console.log(jobScheduling([20, 10, 40, 30], [4, 1, 1, 1]))
console.log(jobScheduling([100, 19, 27, 25, 15], [2, 1, 2, 1, 1]))
// console.log(jobScheduling())