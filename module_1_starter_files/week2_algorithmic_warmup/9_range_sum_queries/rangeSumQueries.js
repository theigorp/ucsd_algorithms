class NumArray {
  #array;

  constructor(array) {
    this.#array = array;
  }

  sumRange(left, right) {
    let sum = 0;

    for (let i = left; i <= right; i++) {
      sum += this.#array[i];
    }

    return sum;
  }
}

const myNumArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(myNumArray.sumRange(0, 2));
console.log(myNumArray.sumRange(2, 5));
console.log(myNumArray.sumRange(0, 5));