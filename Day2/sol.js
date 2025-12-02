const fs = require('fs');

// Read input from file
const input = fs.readFileSync('Day2/input.txt', 'utf-8').split(',');

let range = [];
const isPalendrom = (from, to) => {
    for(let i = Number(from); i <= Number(to); i++){
        // part 1 
        // const reg = /b(\d+)\1{1}/b/;
        // part 2
        const reg = /\b(\d+)\1+\b/;
        if(reg.test(String(i))){
            range.push(i);
        }
    }
}


for(let range of input){
    let [from, to] = range.split('-');
    isPalendrom(from, to);
}

let total = range.reduce((acc, val) => acc + val, 0);

console.log("Total palendroms found:", total);


// resources used:
// https://stackoverflow.com/questions/6507982/regex-to-find-repeating-numbers