"use strict";

// Conditional Statments
let number = 5;

if (number == 9){
    console.log('ok');
} else {
    console.log('error');
}

const numIf = 50;

if (numIf < 49){
    console.log('Error');
} else if(numIf > 100){
    console.log('Too much');
}else {
    console.log('Ok');
}

(numIf === 50) ? console.log('Ok') : console.log('Error'); // ternary operator


switch (numIf) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50:
        console.log('Correct');
        break;
    default:
        console.log('No condition');      
}