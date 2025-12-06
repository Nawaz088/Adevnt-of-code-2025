const fs = require('fs');
// const { start } = require('repl');

let input = fs.readFileSync('Day5/input.txt', 'utf8');
input = input.split('\n').map(line => line.trim());

// Your code logic here
// push elements until you find a blank line
let ranges = [];
let availabe = [];
for (let line of input) {
    if (line === '') break;
    ranges.push(line);
}
// push elements after the blank line
for (let i = input.length-1; i > 0; i--) {
    if (input[i] === '') break;
    availabe.push(Number(input[i]));
}

// Part 1
const countAvailableNumbers = (list, available) => {
    let count = new Set();
    for (let i = 0; i < ranges.length; i++) {
        let [start, end] = ranges[i].split('-').map(Number);
        if (start > end) [start, end] = [end, start];
        for (let num of availabe) {
            if (num >= start && num <= end) {
                count.add(num);
                // break;
            }
        }
    }
    return count.size;
}

// Part 2
const countMergedRanges = (list) => {
    let parsedRanges = list.map(range => {
    let [start, end] = range.split('-').map(x => BigInt(x));
    if (start > end) [start, end] = [end, start];
        return [start, end];
    });

    parsedRanges.sort((a, b) => a[0] > b[0] ? 1 : -1);

    let mergedRanges = [];
    let [currStart, currEnd] = parsedRanges[0];
    for (let i = 1; i < parsedRanges.length; i++) {
        let [nextStart, nextEnd] = parsedRanges[i];
        if (nextStart <= currEnd + 1n) {
            currEnd = currEnd > nextEnd ? currEnd : nextEnd;
        } else {
            mergedRanges.push([currStart, currEnd]);
            [currStart, currEnd] = [nextStart, nextEnd];
        }
    }
    mergedRanges.push([currStart, currEnd]);

    let totalCount = 0n;
    for (let [start, end] of mergedRanges) {
        totalCount += (end - start + 1n);
    }
    return totalCount;
}

console.log("Total merged ranges count: ", countAvailableNumbers(ranges, availabe));