function maximumSalary(digits) {
  // easy solution:
  //digits.sort((a, b) => b - a);
  //return Number(digits.join(''));
  const maxSalary = [];

  while(digits.length >= 1) {
    const maxDigit = Math.max(...digits);
    const maxDigitIndex = digits.findIndex(digit => digit === maxDigit);
    maxSalary.push(maxDigit);
    digits.splice(maxDigitIndex, 1);
  }

  return Number(maxSalary.join(''));
}

// console.log(maximumSalary([1, 9, 8, 9, 6]));

function minPatientTotalWaitingTime(patientVisitTimes) {
  let totalWaitingTime = 0;

  patientVisitTimes.sort((a, b) => a - b);

  for(let i = 0; i < patientVisitTimes.length; i++) {
    if (i !==  0) {
      let previousWaitingTime = 0;

      for (let j = 0; j < i; j++) {
        previousWaitingTime += patientVisitTimes[j];
      }

      totalWaitingTime += previousWaitingTime;
    }
  }

  return totalWaitingTime;
}
// const randomNumbers = Array.from({ length: 200000 }, () => Math.floor(Math.random() * (20 - 3 + 1)) + 3);
// console.log(minPatientTotalWaitingTime([15, 20, 10]));
// console.log(minPatientTotalWaitingTime([12, 4, 15, 7, 6, 9]));
console.time('aa')
console.log(minPatientTotalWaitingTime(randomNumbers));
console.timeEnd('aa')