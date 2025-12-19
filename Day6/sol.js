const fs = require('fs');

let input = fs.readFileSync('Day6/sampleInput.txt', 'utf8').split('\n');
let problems = [];
for(let line in input) {
    problems.push(input[line]);
}
// console.log(problems);
// remove the empty spaces from the list
// for(let line in problems) {
//     problems[line] = problems[line].filter(item => item !== '');
// }

let operations = problems[problems.length - 1];
let length = problems[0].length;
console.log(length);
const performOperation = (arr, operation) => {
    let output = [];
    for(let i = 0; i < length; i++) {
        let res = operation[i] === '*' ? 1 : 0;
        for(let j = 0; j < arr.length-1; j++) {
            if(operation[i] === '*'){
                res *= parseInt(arr[j][i]);
            } else if(operation[i] === '+'){
                res += parseInt(arr[j][i]);
            }
        }
        output.push(res);
    }
    return output.reduce((a,b) => a + b, 0);
}

// Part 2
// console.log(problems[3].length);
    // [problems[problems.length - 3].length - 2]);
let res = [];
let operationsList = problems[problems.length - 1].split(' ').filter(item => item !== '').reverse();
for(let i = length-1; i >= 0; i--) {
    let store = '';
    let j = 0;
    for(j = problems.length-2; j >= 0; j--){
        store += problems[j][i ?? ' '];
    }
    
    store = store.split('').reverse().join('')
    res.push(store);
}
res = res.filter(item => item !== '   ');
let newRes = [];
for(let i = 0; i <= res.length-1; i+=3) {
    newRes.push(res.slice(i, i+3));
}
for (let i = 0; i < newRes.length; i++) {
    if (operationsList[i] === '*') {
        newRes[i] = newRes[i].reduce((a, b) => BigInt(a) * BigInt(b.trim()), 1n);
    } else {
        newRes[i] = newRes[i].reduce((a, b) => BigInt(a) + BigInt(b.trim()), 0n);
    }
}
// console.log(newRes);
console.log(newRes.reduce((a,b) => a + b, 0n));