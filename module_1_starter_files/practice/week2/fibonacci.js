function fibRecursive(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibRecursive(n - 1) + fibRecursive(n - 2);
  }
}

function fibEfficient(n) {
  const list = [0n,1n];

  for(let i = 1; i < n; i++) {
    list.push(list[i] + list[i - 1]);
  }

  return list[list.length - 1];
}

console.time('runtime');
console.log(fibEfficient(99999));
console.timeEnd('runtime');