"use strict";

// Loops

let numWhile = 50;

while(numWhile < 55){
    console.log(numWhile);
    numWhile++;
}

do {
    console.log(numWhile);
    numWhile++;
}
while (numWhile < 55);

for(let i = 1; i < 8; i++){
    if (i ==6){
        continue;
    }
    console.log(i);
}

for(let i = 0; i < 3; i++){
    console.log(i);
    for(let j = 0; j < 3; j++){
        console.log(j);
    }
}

let star = "*";

for(let i = 0; i < 6; i++){
    console.log(star);
    star+= "*";
}

first: for(let i = 0; i < 3; i++){
    console.log(`First level: ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for(let k = 0; k < 3; k++){
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}
