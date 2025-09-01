function wildcardMatching(s, p) {
  let sIdx = 0;
  let pIdx = 0;
  let lastSeenAsteriskS = 0;
  let lastSeenAsteriskP = -1;

  while (sIdx < s.length) {
    if (s[sIdx] === p[pIdx] || p[pIdx] === '?') {
      sIdx++;
      pIdx++;
    } else if (p[pIdx] === '*') {
      lastSeenAsteriskS = sIdx;
      lastSeenAsteriskP = pIdx;
      pIdx++;
    } else if (lastSeenAsteriskP !== -1) {
      pIdx = lastSeenAsteriskP + 1;
      lastSeenAsteriskS++;
      sIdx = lastSeenAsteriskS;
    } else {
      return false;
    }
  }

  while (pIdx < p.length && p[pIdx] === '*') {
    pIdx++;
  }

  return pIdx === p.length;
}

// console.log(wildcardMatching('aajki', '*?i')); // t
// console.log(wildcardMatching('aajki', '*ki')); // t
// console.log(wildcardMatching('aajski', 'aa?*')); // t
// console.log(wildcardMatching('aajski', 'aa?ski')); // t
// console.log(wildcardMatching('aajski', 'aas*')); // f
// console.log(wildcardMatching('', '****')); // t
// console.log(wildcardMatching('cb', '?a')); // f
// console.log(wildcardMatching('aajki', '*k')); // f
console.log(wildcardMatching('a', '*')); // t
