function maxPairwiseProduct(array) {
  array.sort((a, b) => a - b);
  return array[array.length - 1] * array[array.length - 2];
  // const max1 = findMax(array);
  // array.splice(array.findIndex(element => element === max1), 1);
  // const max2 = findMax(array);
  // return max1 * max2;
}

function findMax(array) {
  let max = array[0];
  array.forEach(element => {
    if (element > max) {
      max = element;
    }
  });

  return max;
}

function maxFake(arr) {
  let result = 0;
  const n = arr.length;

  for(let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          if (arr[i] * arr[j] > result) {
              result = arr[i] * arr[j];
          }
      }
  }

  return result;
}

function generateRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(maxPairwiseProduct([10000000000, 9000000000]));
console.log(maxPairwiseProduct([8, 10, 1, 6, 7, 9]));

while (true) {
  const arrLength = generateRandomNumberInRange(2, 15)
  console.log(arrLength);

  const array = [];
  for (let i = 0; i < arrLength; i++) {
      array.push(generateRandomNumberInRange(0, 100000));
  }
  console.log(array);

  const result1 = maxPairwiseProduct(array);
  const result2 = maxFake(array);

  if(result1 !== result2) {
      console.log(`Wrong answer! Output of max(): ${result1}. Output of maxFake(): ${result2}`);
      break;
  } else {
      console.log('OK');
  }

}