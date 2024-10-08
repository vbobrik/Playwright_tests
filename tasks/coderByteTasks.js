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

// -- T2 -- HARD

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

// -- T3 -- Easy

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

// -- T3 -- Medium

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

// -- T4 -- HARD

function calculator(str) {
    function getResult (exp) {
        let res = '';
        switch(exp[1]) {
            case '/':
                res = exp[0] / exp[2];
                break;
            case '*':
                res = exp[0] * exp[2];
                break;
            case '-':
                res = exp[0] - exp[2];
                break;
            case '+':
                res = +exp[0] + +exp[2];
                break;
        }
        return res;
    }

    function calcResult(searchExp, matchExp, splitExp) {
        while(str.search(searchExp) >= 0) {
            let strExpression = str.match(matchExp)[0];
            let arrExpression = strExpression.split(splitExp);
            str = str.replace(strExpression, getResult(arrExpression));
        }
    }

    // Calculate Result for all exprations in brackets
    while (str.indexOf('(') >= 0) {
        let bracketsExpression = str.substring(str.indexOf('('), str.indexOf(')') + 1);
        let getExpression = bracketsExpression.replace(/\(|\)/g, '').split(/(\*|\/|[+-])/g);
        str = str.replace(bracketsExpression, getResult(getExpression));
    }

    // Calculate Result for all '*' and '/'
    calcResult(/\/|\*/, /\d+(\/|\*)\d+/, /(\*|\/)/g);
    // Calculate Result for all '+' and '-'
    calcResult(/[+-]/, /\d+[+-]\d+/, /([+-])/g);

    return str;
}

console.log(calculator('6*(4/2)+3*1')) //15
console.log(calculator('6*(4/2)+3*1-(3+5)')) //7
console.log(calculator('6/3-1')) //1

// -- T5 -- Medium
// solution 1:
function arrayAddition(arr) {
    let sum = 0;
    arr.sort((a, b) => a - b);
    let largerN = arr.pop();
    if(!arr) return 'false';
    return calcSum(arr) ? 'true' : 'false';

    function checkSum(arr) {
        sum = arr.reduce((res, el) => res + el, 0);
    return (sum === largerN);

    }

    function calcSum(arr) {
        if (!checkSum(arr)) {
            let cuttedArr = arr;

            for (let i = 0; i < arr.length; i++) {
                cuttedArr.splice(i, 1);
                if(checkSum(cuttedArr)) return true;
            }
            return false;
        }
        return true;
            
        }
}

console.log(arrayAddition([4, 6, 23, 10, 1, 3])); //true
console.log(arrayAddition([4, -6, 10, -1, 3])); //false

// solution 2 (NOT mine):
function ArrayAddition(arr) { 

    // sort the array in ascending order and remove the largest number 
      var target = arr.sort(function(a, b){return a-b}).pop();
    
      // check if any combination of numbers in the array (excluding the largest number) 
      // can be added up to equal the largest number in the array
      return isContains(arr, target);
    
      function isContains(arr, target){
    
      // if the array is empty, check if the target is zero
      if(arr.length === 0){
        return target === 0;
      }
    
      // get the first element in the array and the remaining elements
      var head = arr[0];
      var tail = arr.slice(1);
    
      // check if the target can be reached by subtracting the first element from the target
      // and checking if the remaining elements contain a combination that adds up to the result
      // or check if the remaining elements contain a combination that adds up to the target
      return isContains(tail, target - head) || isContains(tail, target);
    }
    
    }
       
    // keep this function call here 
    console.log(ArrayAddition([4, 6, 23, 10, 1, 3]));
    console.log(ArrayAddition([4, -6, 10, -1, 3]));

// -- T6 -- Medium

    function SimpleMode(arr) {
        let values = new Map();
        arr.forEach((el) => {
            if (values.has(el)) {
                values[el] = values.get(el) + 1;
            } else {
                values.set(el, 1);
            }
        })
        console.log(values)
        let max = [1, 1];
        for (const [key, value] of Object.entries(values)) {
            if (value > max[0] && values > 1) {
                max = [value, key];
            }
        }

        return (max[1] === 1) ? -1 : max[1];
    }

    console.log(SimpleMode([10, 4, 5, 2, 4])); //4
    console.log(SimpleMode([5, 10, 10, 6, 5])); //5

// -- T7 -- Medium
    // https://appdev4tech.com/2023/02/code-interview-coderbyte-string-scramble-code-challenge-javascript-solution-source-code/

    // Solution 1:

function StringScramble(a, b) {
let str1 = a.replace(/\d+/g, '').split('');
let str2 = b.replace(/\d+/g, '').split('');

return !str1.find(el => !str2.includes(el)) || !str2.find(el => !str1.includes(el));
}

console.log(StringScramble('rkqodlw','world'));
console.log(StringScramble('rk1odlw','wo23d'));
console.log(StringScramble('i3p2kk','v3b21k'));

    // Solution 2:

function StringScramble2(str1, str2) {
    function findDiffer (s1, s2) {
        return s1.replace(/\d+/g, '').split('').find(el => s2.indexOf(el) === -1);
    }

    return !findDiffer(str1, str2) || !findDiffer(str2, str1);
}

console.log(StringScramble2('rkqodlw','world')); //true
console.log(StringScramble2('rk1odlw','wo23d')); //true
console.log(StringScramble2('i3p2kk','v3b21k')); //false

// -- T8 -- Medium
// https://appdev4tech.com/2023/03/stock-picker-interview-coderbyte-code-challenge-javascript-solution-source-code-answers/

function StockPicker(arr) {
    let maxProfit = -1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] < arr[j]) {
                let profit = arr[j] - arr[i];
                maxProfit = (maxProfit <  profit) ? profit : maxProfit;
            };
        }
    }
    return maxProfit;
}

console.log(StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15])); //16
console.log(StockPicker([10, 9, 8, 2])); //-1

// Solution from author (not mine):
function StockPicker2(arr) { 
    var profit=-1; // Initialize the maximum profit to -1
    var buyPrice=arr[0]; // Initialize the buying price to the first element of the array
    for(var i=1; i<arr.length; i++){ // Loop through the array starting from the second element
        if(arr[i]<buyPrice){ // If the current element is smaller than the buying price
            buyPrice=arr[i]; // Update the buying price
        }
        else if( (arr[i]-buyPrice) > profit){ // If selling the stock at the current price will give a greater profit than the previous maximum profit
            profit=arr[i]-buyPrice; // Update the maximum profit
        }
    }
    
  return profit; // Return the maximum profit 
}