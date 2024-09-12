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

// -- T3 --

function runLength(str) {
    let result = [`1${str.substring(0, 1)}`];
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            result.push(1 + str.substring(i, i + 1))
        } else {
            let smth = result[result.length - 1].split('');
                result[result.length - 1] = (+smth[0] + 1) + smth[1];
        }
    }
    return result.join('');
}

console.log(runLength('aabbcde')); //2a2b1c1d1e
console.log(runLength('wwwbbbw')); //3w3b1w
console.log(runLength('qtoopppt')); //1q1t2o3p1t

function runLength2(str) {
    let count = 1;
    let result = '';
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
                result += count + str[i];
                count = 1;
        }
    }
    return result;
}

console.log(runLength2('aabbcde')); //2a2b1c1d1e