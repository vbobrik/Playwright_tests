var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
    return arr.concat();
}

var arr1 = arrayClone(vegetables);
console.log(arr1);

let str1 = vegetables.join(', ');
let str2 = vegetables.toString();
console.log(str1, str2);

const num = '43550825673';
const num2 = '0';

function colonOdd (num) {
    let arrNum = num.split('');
    let result = arrNum.map((el, i, arr) => (el % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i+1]) ? `${el}:` : el);
    return result.join('');
}
console.log(colonOdd(num));
console.log(colonOdd(num2));

const str = 'КаЖдЫй ОхОтНиК';

function changeRegister (str) { 
    let arr = str.split('');
    let res = arr.map(el => (el === el.toUpperCase()) ? el.toLowerCase() : el.toUpperCase());
    return res.join('');
}
console.log(changeRegister(str));

var arr = ["php", "php", "css", "css",
    "script", "script", "html", "html", "java"
  ];
  function removeDuplicates(arr) {
  
    // let unicSet = new Set(arr);
    // return Array.from(unicSet);
    //OR
    let unicArr = [];
    for (const el of arr) {
        if (unicArr.includes(el)) continue;
        unicArr.push(el);
    }
    return unicArr;
  }

console.log(removeDuplicates(arr));

function chooseYears(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        if ( (i % 4 === 0 && i % 100  > 0 ) || i % 400  === 0) arr.push(i);
    }
    return arr;    
    }
console.log(chooseYears(2000,2018));

let array = [1,2,3,4,5,6,7,8,9];

 function getFirst(array, n) {
    if (array === null) return 'Array is required'
    if (!n) return array[0];
    // return (n < 0) ? array.splice(0, array.length - -(n)): array.slice(0, n);
    return array.slice(0, n); 
};

console.log(getFirst(array));
console.log(getFirst(array, 4));
console.log(getFirst(array, -3));

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6];

function sum (arr1, arr2) {
    if(!arr1 || !arr2) return 'Arrays are required'
    // return arr1.concat(arr2).reduce((res, el) => el + res, 0); // another condtion
    let arrLonger = (arr1.length > arr2.length) ? arr1 : arr2; 
    let res = [];
    for(let i = 0; i < arrLonger.length; i++) {
        let sum = !arr1[i] ? arr2[i] : !arr2[i] ? arr1[i] : arr1[i] + arr2[i]; 
        res.push(sum);
    }
    return res;
}

console.log(sum(arr1, arr2));

function countIdentic(arr) {
    if (!arr) return 0;
    let res = new Map();

    arr.forEach(element => res.has(element) ? res.set(element, res.get(element) + 1) : res.set(element, 1));
    let amount = 0;
    for (let value of Object.values(res)) {
        if (value > 1) {
            amount.push(value)
    }}
    return amount.length;
}
console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])) // 4
console.log(countIdentic([15,14,13,19,13,14,14,14,7,9,9])) // 3

var arr1 = ['Капуста', 'Капитал'];
var arr2 = ['Репа', 'Редиска'];

function startingSubstring(arr) {
    if (!arr || arguments.length < 1) return 'Strings are required';
    // let commonStr = arr[0];

    //  for (const el of arr) {
    //     el.split('').forEach((letter, i) => {

    //         if (letter !== commonStr[i]) {
    //             letter.slice(0, i + 1);
    //             console.log(commonStr);
    //              }
    //         })
    // }
    // return commonStr;
    let result = "";

    const str1 = arr[0];
    const str2 = arr[1];
    for (let i = 0; i <= arr.length; i++) {
        while (str1[i] === str2[i]) {
            result += str1[i];
            break;
        }
    }
    return result;
}

var res1 = startingSubstring(arr1);
var res2 = startingSubstring(arr2);
console.log(res1, res2);

function removeItem(arr, num) {
    if(arr.length === 0 || !arr) return null;

    arr.forEach((el, i) => {
        if (el === num) {
            arr.splice(i, 1);
        }
    })
    return arr;
}

console.log(removeItem([3, 5, 7, 8, 5], 5));
    
function arrayFilled(len, value) {
    if(!len || !value) return null;
    if (len === 0) return 0;
    let arr = [];
    for(let i = 0; i < len; i++) {
        arr.push(value);
    }
    return arr;
    }
console.log(arrayFilled(5, 1));
console.log(arrayFilled(4, 12));

function moveElement(arr,from,to) {

   let storedEl = arr[from];
   arr.splice(from, 1);
    arr.splice(to, 0, storedEl);
    return arr;
    
}
    
    var arr = [ 'a', 'b', 'c', 'd', 'e'];
    console.log(moveElement(arr, 3, 1));

function generateNumbers(start, len) {
    let arr = [];
    while (arr.length < len) {
        arr.push(start++);
     }
        return arr;
}

console.log(generateNumbers(0, 5))
console.log(generateNumbers(-5, 4))