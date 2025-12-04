const fs = require('fs');

let input = fs.readFileSync('Day3/input.txt', 'utf8');
input = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);

// Your code logic here
let res = [];

// Part 1
// const findMaxTens = (num) => {
//     // sorting won't work because we cannot change places of the number
//     let max = 0;
//     for(let i = 0; i < num.length; i++){
//         for(let j = i+1; j < num.length; j++){
//             let temp = [num[i], num[j]].join('')
//             temp = parseInt(temp);
//             if(temp > max) {
//                 max = temp
//             };

//         }
//     }
//     res.push(max) 
// }

// Part 2 atempt - 1
// const FindMax12Digits = (num) => {
//     let max = 0;
//     // for(let i = 0; i < num.length; i++){
//     //     for(let j = i+1; j < num.length; j++){
//     //         for(let k = j+1; k < num.length; k++){
//     //             for(let l = k+1; l < num.length; l++){
//     //                 for(let m = l+1; m < num.length; m++){
//     //                     for(let n = m+1; n < num.length; n++){
//     //                         for(let o = n+1; o < num.length; o++){
//     //                             for(let p = o+1; p < num.length; p++){
//     //                                 for(let q = p+1; q < num.length; q++){
//     //                                     for(let r = q+1; r < num.length; r++){
//     //                                         for(let s = r+1; s < num.length; s++){
//     //                                             for(let t = s+1; t < num.length; t++){
//     //                                                 let temp = [num[i], num[j], num[k], num[l], num[m], num[n], num[o], num[p], num[q], num[r], num[s], num[t]].join('')
//     //                                                 temp = parseInt(temp);
//     //                                                 if(temp > max) {
//     //                                                     max = temp
//     //                                                 };
//     //                                             }
//     //                                         }
//     //                                     }
//     //                                 }
//     //                             }
//     //                         }
//     //                     }
//     //                 }
//     //             }
//     //         }
//     //     }
//     // }
//     let n = num.length;
//     let windowSize = 12;
//     for(let i = 0; i <= n - windowSize; i++){
//         let tempWindow = num.slice(i, i + windowSize).map(Number)
//     }
//     res.push(max) 
// }

// Part 2 atempt - 2
const FindMax12Digits = (num) => {
    // let res = '';
    // let n = num.length;
    // let start = 0;
    // let windowSize = 12;
    // for(let i = 0; i < windowSize; i++){
    //     let remaining = windowSize - i;
    //     let end = n - remaining;
    //     let bestIndex = start;
    //     for(j = start; j < end; j++){
    //         if(num[j] > num[bestIndex]) {
    //             bestIndex = j;
    //             if(num[j] === '9') break;
    //         }
    //     }
    //     res += num[bestIndex];
    //     start = bestIndex+1;
    // }
    
    let res = '';
    let n = num.length;
    let k = 12;                     // how many digits to pick
    let start = 0;

    for (let take = 0; take < k; take++) {
        let remaining = k - take;   // how many digits still needed
        let end = n - remaining;    // last possible index to choose from

        let bestIndex = start;

        for (let j = start; j <= end; j++) {
            if (num[j] > num[bestIndex]) {
                bestIndex = j;
                if (num[j] === '9') break;   // cannot do better
            }
        }

        res += num[bestIndex];
        start = bestIndex + 1;  // move forward
    }

    return res;
    
}

let finalres = [];
for(let line in input){
    let n = FindMax12Digits(input[line]);
    finalres.push(n);
}

finalres = finalres.map(Number).reduce((a,b) => a + b, 0);
console.log('RESULT', finalres);