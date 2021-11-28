"use strict";

// function first() {
//     // do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(land, callback) {
//     console.log(`Я вчу: ${land}`);
//     callback();
// }

// function done() {
//     console.log(`Я пройшов цей урок!`);}

// learnJS(`JavaScript`, done);

// 20 object

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);


// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`властивість ${i}, має значення ${options[key][i]}`);
//         }
//     } else {
//         console.log(`властивість ${key}, має значення ${options[key]}`);
//      counter++;
//     }
// }
// console.log(counter);

// 21 masuvu

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }
// arr[99] = 0;
// console.log(arr.length); 
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} в середині масиву ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products =  str.split(", ");
// products.sort();
// console.log(products.join('; '));

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //ssulka

copy.a = 10;

console.log(copy);
console.log(obj);

