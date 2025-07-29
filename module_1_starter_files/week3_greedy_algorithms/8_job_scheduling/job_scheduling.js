/*
  LOGIC:
    Greedy choice is to first select the jobs with the highest profit and place them at the last position
    where they can still be executed before the deadline (job.deadline - TIME_TO_PERFORM_JOB). A hacky
    approach is to find maxDeadline and use that to fill the result array with that many null values.
  
  OPTIMIZATIONS:
   Runtime is O(n * m) - could we solve it in O(nlogn)?
*/
function jobScheduling(profits, deadlines) {
  //* O(n)
  const jobs = profits.map((profit, i) => ({
    profit,
    deadline: deadlines[i]
  }));

  //* O(nlogn)
  jobs.sort((a,b) => b.profit - a.profit);
  
  const TIME_TO_PERFORM_JOB = 1;
  // we need the max deadline so we can know what's the max length of the jobs that can be performed
  const MAX_DEADLINE = Math.max(...jobs.map(job => job.deadline));
  // we fill the array with nulls to mark all places as available
  const optimalOrderingOfJobs = new Array(MAX_DEADLINE).fill(null);

  //* O(n * m)
  for (const job of jobs) {
    // the position is set to the last possible time a job can be executed so we can allocate sooner positions to other jobs
    const jobPosition = job.deadline - TIME_TO_PERFORM_JOB;

    const isPositionAvailable = optimalOrderingOfJobs[jobPosition] === null;
    // if any of values in array are null, it means we can place a job in that position
    //* O(m) - m is MAX_DEADLINE
    const firstAvailablePosition = optimalOrderingOfJobs.findIndex(job => job === null);
 
    if (isPositionAvailable) {
      optimalOrderingOfJobs[jobPosition] = job;
    } else if (firstAvailablePosition !== -1 && firstAvailablePosition + TIME_TO_PERFORM_JOB <= job.deadline) {
      optimalOrderingOfJobs[firstAvailablePosition] = job;
    }
  }
  //* O(m)
  return optimalOrderingOfJobs.filter(job => job !== null);
}

function optimized(profits, deadlines) {
  const jobs = profits.map((profit, i) => ({
    profit,
    deadline: deadlines[i]
  }));
  jobs.sort((a,b) => b.profit - a.profit);
  
  const TIME_TO_PERFORM_JOB = 1;
  const MAX_DEADLINE = Math.max(...jobs.map(job => job.deadline));
  //* this should be a priority queue / min heap - in that case we'll have an O(nlogn) solution 
  const optimalOrderingOfJobs = new Array(MAX_DEADLINE).fill(null);

  for (const job of jobs) {
    const jobPosition = job.deadline - TIME_TO_PERFORM_JOB;

    // start backwards from job position - if the last available time to perform the job (jobPosition) is available, set it at that position.
    // if it's not available, try the slot that's sooner that jobPosition by 1. O(m) - m is MAX_DEADLINE
    for (let i = jobPosition; i >= 0; i--) {
      if (optimalOrderingOfJobs[i] === null) {
        optimalOrderingOfJobs[i] = job;
        break;
      }
    }
  }

  return optimalOrderingOfJobs.filter(job => job !== null);
}

// console.log(optimized([20, 10, 40, 30], [4, 1, 1, 1]))
// console.log(jobScheduling([100, 19, 27, 25, 15], [2, 1, 2, 1, 1]))
console.log(optimized ([60, 25, 65, 22, 70, 20, 10, 80], [5, 4, 6, 2, 6, 4, 2, 2]));
// console.log(jobScheduling())