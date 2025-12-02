const fs = require('fs');

// Read input from file
const input = fs.readFileSync('Day1/SampleInput.txt', 'utf-8').split('\n');

let start = 50;
let count = 0;
let a = [...Array(100).keys()];

// Part 1
// let GoLeftBy = (num) => {
//     let res = (start - num + 100)%100;
//     if( res === 0 ) count++;
//     start = res;
//     return res;
// }

// let GoRightBy = (num) => {
//     let res = (start + num)%100;
//     if( res === 0 ) count++;
//     start = res;
//     return res;
// }

// Part 2
let GoLeftBy = (num) => {
    for(let i = 0; i < num; i++){
        start = (start-1+100)%100;
        if(start == 0){ count++; }
    }
}

let GoRightBy = (num) => {
    for(let i= 0; i < num; i++){
        start = (start+1)%100;
        if(start == 0) count++;
    }
}

for (let line of input) {
    let dir = line[0];
    let num = parseInt(line.slice(1));
    if (dir === 'L') {
        GoLeftBy(num);
    } else {
        GoRightBy(num);
    }
}

console.log("Final password:", count);