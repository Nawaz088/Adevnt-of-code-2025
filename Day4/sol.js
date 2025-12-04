const fs = require('fs');

let inputMatrix = [];
let input = fs.readFileSync('Day4/input.txt', 'utf8');
input = input.split('\n').map(line => {
    line.trim();
    inputMatrix.push(line);
});

// Your code logic here
// Helper function to check valid positions
function isValidPos(i, j, n, m) {
    if (i < 0 || j < 0 || i >= n || j >= m)
        return 0;
    return 1;
}

// // Part 1

// const checkAdjacent = (line) => {
//     let n = line.length;
//     let m = line[0].length;
//     let directions = [
//         [-1, -1], [-1, 0], [-1, 1],
//         [0, -1],          [0, 1],
//         [1, -1], [1, 0], [1, 1]
//     ];

//     let mainCount = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             let occupiedCount = 0;
//             if (line[i][j] !== '@') continue;
//             for(let [dx, dy] of directions) {
//                 let x = i + dx;
//                 let y = j + dy;
//                 if(isValidPos(x, y, n, m)) {
//                     if(line[x][y] === '@') {
//                         occupiedCount++;
//                     }
//                 }
//             }
//             if(occupiedCount < 4) {
//                 mainCount++;
//             }
//         }
//     }
//     return mainCount;
// };

let possibleRolles = [];
let checkMaxPossibleRolles = (line) => {
    let n = line.length;
    let m = line[0].length;
    let directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    let mainCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let occupiedCount = 0;
            if (line[i][j] !== '@') continue;
            for(let [dx, dy] of directions) {
                let x = i + dx;
                let y = j + dy;
                if(isValidPos(x, y, n, m)) {
                    if(line[x][y] === '@') {
                        occupiedCount++;
                    }
                }
            }
            if(occupiedCount < 4) {
                mainCount++;
                possibleRolles.push([i, j]);
            }
        }
    }
    return mainCount;
};

let changeMatrix = (matrix, positions) => {
    for(let pos of positions) {
        let [x, y] = pos;
        matrix[x] = matrix[x].substring(0, y) + 'L' + matrix[x].substring(y + 1);
    }
    return matrix;
};

let newRes = 0;
    let n = inputMatrix.length;
    while(n--){
        let res = checkMaxPossibleRolles(inputMatrix);
        newRes += res;
        inputMatrix = changeMatrix(inputMatrix, possibleRolles);
    }
console.log('RESULT', possibleRolles.length);