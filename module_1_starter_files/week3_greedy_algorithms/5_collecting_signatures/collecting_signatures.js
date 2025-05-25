// by Igor Pavkovic

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = [];
let n = 0;

rl.on('line', (line) => {
  inputs.push(line.trim());

  if (inputs.length === 1) {
    n = parseInt(inputs[0], 10);
  } else if (inputs.length === n + 1) {
    const segments = [];
    for (let i = 1; i <= n; i++) {
      const [li, ri] = inputs[i].split(' ').map(Number);
      segments.push([li, ri]);
    }

    const result = collectingSignatures(segments);
    console.log(result);
    process.exit();
  }
});

function collectingSignatures(n, ...segments) {
  const points = [];
  console.log(segments);

  segments.sort((a, b) => a[1] - b[1]);
  
  for (let i = 0; i < segments.length; i++) {
    const rightmostValue = segments[i][1];
    const remainingSegments = segments.slice(i + 1);
    let coveredSegments = 0;

    for (const segment of remainingSegments) {
      if (segment[0] <= rightmostValue) {
        coveredSegments++;
      }
    }

    points.push(rightmostValue);
    segments.splice(0, coveredSegments);
  }

  return `${points.length}\n${points.toString().replaceAll(',', ' ')}`;
}

// console.log(collectingSignatures(3, [[1, 3], [2,5], [3,6]]))
// console.log(collectingSignatures(4, [[1, 3], [2,5], [4,7], [5,6]]))