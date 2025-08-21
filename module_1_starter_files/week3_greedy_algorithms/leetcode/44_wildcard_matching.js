function wildcardMatching(s, p) {
  let sIndex = 0;
  let pIndex = 0;
  let lastSeenAsteriskIndexInS = 0;
  let lastSeenAsteriskIndex = -1;

  while (sIndex < s.length) {
    if (s[sIndex] === p[pIndex] || p[pIndex] === '?') {
      sIndex++;
      pIndex++;
    } else if (p[pIndex] === '*') {
      lastSeenAsteriskIndexInS = sIndex;
      lastSeenAsteriskIndex = pIndex;
      pIndex++;
    } else {
      if (lastSeenAsteriskIndex !== -1) {
        pIndex = lastSeenAsteriskIndex + 1;
        lastSeenAsteriskIndexInS++;
        sIndex = lastSeenAsteriskIndexInS;
      } else {
        return false;
      }
    }
  }

  while (pIndex < p.length && p[pIndex] === '*') {
    pIndex++;
  }

  return pIndex === p.length;
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
