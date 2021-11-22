"use strict";

if (1) {
    console.log('ok!');
} else {
    console.log('Error');
}



// if (num<49) {
//     console.log('Error');
// } else if (num > 100){
//     console.log('Багато');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = 51;

switch (num) {
    case 49:
        console.log('Неправильно');
        break;
    case 100:
        console.log('Неправильно');
        break;   
    case 50:
        console.log('Правильно');
        break;        
    default:
        console.log('не цього разу');
        break;        
}