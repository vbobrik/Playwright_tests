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
    let res = new Map([]);

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