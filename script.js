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

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

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