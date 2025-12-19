const fs = require('fs');

let input = fs.readFileSync('Day6/sampleInput.txt', 'utf8').split('\n');
let rows = input.slice(0, -1).map(line => line.trim().split(' ').map(Number));

const ops = input[input.length - 1]
  .trim()
  .split(/\s+/);

  const cols = [];
const width = rows[0].length;

for (let c = 0; c < width; c++) {
  cols[c] = rows.map(r => r[c]);
}
console.log(cols[0]);
let result = 0;

for (let i = 0; i < cols.length; i++) {
  if (ops[i] === '*') {
    result += cols[i].reduce((a, b) => a * b, 1);
  } else {
    result += cols[i].reduce((a, b) => a + b, 0);
  }
}

console.log(result);
