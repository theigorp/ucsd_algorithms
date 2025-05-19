function maxPairwise(arr) {
  arr.sort((a, b) => b - a);
  return arr[0] * arr[1];
}

console.log(maxPairwise([6816521515, 87637, 74297, 2904, 32873, 86010, 87637, 66131, 82858, 82935]));