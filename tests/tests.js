const {webkit, chromium, firefox} = require('playwright');

// (async () => {
//     for (const browserType of [webkit, chromium, firefox]) {
//         let browser = await browserType.launch();
//         let page = await browser.newPage();
//         await page.goto('https://yandex.by/?npr=1');
//         await page.screenshot({
//             path: `screenshot-${browserType.name()}.png`
//         });
//         await browser.close();
//         console.log('success: ' + browserType.name());
//     }
// }) ();

function f (arr) {
    if (arr.length === 0 || arr.length === 1) return 0;
    let maxArr = [];
    let prev, max = 1;
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if(prev == undefined) {
            prev = el;
            maxArr.push(prev);
            continue;
        } 
        console.log('el: ', el, "prev: ", prev)
        if (el == prev) {
            maxArr.push(el);

        } else {
            if (maxArr.length > max) {
                max = maxArr.length;
            console.log('final maxArr', maxArr)

            }
            maxArr = [el];
            prev = el;
        }
    }
    return max;
}

console.log(f([ 1, 4, 4, 2, 0])) // 2
console.log(f([ 0, 0, 0])) // 3
// console.log(f([ 1, 1, 2, 0, 0, 0])) // 3
// console.log(f([ 1, 0, 1, 0])) //0
// console.log(f([])) //0
 
function readLine(arr) {
     return arr.sort().join(`\n`);
}

console.log(readLine([1, 5, 2, 7, 3]))
