// -- T1 --

let arrInt = [1, 3, 5, 2, 7, 9, 6, 8];
let arrInt2 = [2, 1, 4];

function findMissingInt (arr) {
    arr.sort((a, b) => a - b);
    let misiingInt;
    for(let i = 1; i <= arr.length; i++) {
        if(arr[i - 1] !== i) {
            misiingInt = i;
            break;
        }
    }
    return misiingInt;
}

console.log(findMissingInt(arrInt))
console.log(findMissingInt(arrInt2))

// -- T2 --

// function mostFreeTime(strArr) {
//     let ranges = strArr.split(',');
//     let sortedRange = [];
//     for (const range of ranges) {
//         if (range.includes(/AM/g) && sortedRange[0] < range) {
//             sortedRange.pop(range)
//         } else if (range.includes(/AM/g) && sortedRange[0] > range && sortedRange[0] > range) {
//             sortedRange.push(range);
//         } else if (range.includes(/AM/g) && sortedRange[0] < range && sortedRange[1] < range) {
//             sortedRange.push(range);
//         } else if (range.includes(/AM/g) && sortedRange[0] < range && sortedRange[1] > range) {
//             // switch (range) {
//             // case range.includes(/AM/g) && sortedRange[0] < range:
//             //     sortedRange.pop(range);
//             // }
//     }
//     while(sortedRange.length < 3) {
//         s
//     }
//     // let [range1, range2, range3] = strArr.split(',');

//     return strArr;
// }

// console.log(mostFreeTime(readLine()));

// function readLine() {
//     return ["12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"];
// }

// -- T3 --

function firstFactorial(n) {
    if (n === 1 || n === 0) return 1;
    if (n < 0 || typeof n != 'number') {
        return 'Enter positive number';
    } else {
        return n * firstFactorial(n - 1);
    }
}

console.log(firstFactorial(4)); //24
console.log(firstFactorial(8)); //40320