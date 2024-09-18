// 1. The task: To convert the number from digital format to string format. For example, 134345 would be “one hundred thirty-four thousand three hundred forty-five”. Link: https://jazzteam.org/technical-articles/data-driven-testing/
const numbersToWords = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",
    1000000: 'million'
  };
  
function convert (num) {
    if (typeof num === 'string') {
        num = num.split('').filter(el => (el.match(/\d/))).join('');
    }
    if (typeof +num !== 'number') return 'Please, enter number';

    num += '';

    function getDecimal (n) {
        if (n === '00') return '';
        if (n[0] === '0') return numbersToWords[n[1]];
        return (n > 0 && n <= 20) ? numbersToWords[n] : numbersToWords[n[0] + '0'] + '-' + numbersToWords[n[1]]; 
    }

    function getHundred (n) {
        if (n === '000') return '';
        if (n[0] === '0' && n[1] === '0') return numbersToWords[n[2]];
        if (n[0] !== '0' && n[1] === '0' && n[2] === '0') return numbersToWords[n[0]] + ' ' + numbersToWords[100];
        if (n[0] !== '0' && n[1] === '0' && n[2] !== '0') return numbersToWords[n[0]] + ' ' + numbersToWords[100] + ' ' + numbersToWords[n[2]];
        return numbersToWords[n[0]] + ' ' + numbersToWords[100] + ' ' + getDecimal(n[1] + n[2]); 
    }

    function getThousant (n) {
        // console.log( num);
        let thousand;
        switch (n.length) {
            case 6:
                thousand = getHundred(n[0] + n[1] + n[2]) + ' ' + numbersToWords[1000] + ' ' + getHundred(n[3] + n[4] + n[5]);
                break;
            case 5:
                thousand = getDecimal(n[0] + n[1]) + ' ' + numbersToWords[1000] + ' ' + getHundred(n[2] + n[3] + n[4]);
                break;
            case 4:
                thousand = numbersToWords[n[0]] + ' ' + numbersToWords[1000] + ' ' + getHundred(n[1] + n[2] + n[3]);
                break;
            case 3:
                thousand = getHundred(n);
                break;
            case 2:
                thousand = getDecimal(n);
                break;
            default:
                thousand = numbersToWords[n]; 
        }
        return thousand;
    }

    function getMillion (n) {
        let million;
        switch (n.length) {
            case 9:
                million = getHundred(n[0] + n[1] + n[2]) + ' ' + numbersToWords[1000000] + ' ' + getThousant(n.slice(3));
                break;
            case 8:
                million = getDecimal(n[0] + n[1]) + ' ' + numbersToWords[1000000] + ' ' + getThousant(n.slice(3));
                break;
            case 7:
                million = numbersToWords[n[0]] + ' ' + numbersToWords[1000000] + ' ' + getThousant(n.slice(3));
                break;
            default:
                million = getThousant(n);
                break;
        }
        return million;
    }

    return getMillion(num);
}

console.log(convert(134345)) // one hundred thirty-four thousand three hundred forty-five
console.log(convert(10000)) // ten thousand  
console.log(convert(200134345)) // two million one hundred thirty-four thousand three hundred forty-five
console.log(convert('q13dy434k5')) // one hundred thirty-four thousand three hundred forty-five
